import type { CountryGdpDetail, GdpYearPoint } from '../types/economics'

interface WbItem {
  indicator: { id: string; value: string }
  country: { id: string; value: string }
  countryiso3code: string
  date: string
  value: number | null
}

type WbResponse = [
  { page: number; pages: number; per_page: number; total: number; lastupdated: string },
  WbItem[]
]

// In-memory cache for on-demand performance without database
const summaryCache: Map<string, { totalGdp: number; year: number }> = new Map()
const perCapitaCache: Map<string, { perCapita: number; year: number }> = new Map()
const growthCache: Map<string, { growth: number; year: number }> = new Map()
const detailCache: Map<string, CountryGdpDetail> = new Map()

let isBulkLoaded = false

/**
 * Loads bulk macroeconomic indicators (Total GDP, GDP per capita, Growth rate) for all countries.
 */
export async function loadGlobalGdpOverview(forceRefresh = false): Promise<{
  gdpMap: Map<string, { totalGdp: number; year: number }>
  perCapitaMap: Map<string, { perCapita: number; year: number }>
  growthMap: Map<string, { growth: number; year: number }>
}> {
  if (isBulkLoaded && !forceRefresh) {
    return {
      gdpMap: summaryCache,
      perCapitaMap: perCapitaCache,
      growthMap: growthCache,
    }
  }

  try {
    // 1. Fetch Total GDP (current US$)
    const gdpRes = await fetch(
      'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?date=2023:2024&format=json&per_page=600'
    )
    if (gdpRes.ok) {
      const data: WbResponse = await gdpRes.json()
      if (Array.isArray(data) && data.length > 1 && Array.isArray(data[1])) {
        const sortedItems = data[1].filter((item) => item.value !== null && item.countryiso3code)
        sortedItems.sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10))

        for (const item of sortedItems) {
          const code = item.countryiso3code.toUpperCase()
          if (!summaryCache.has(code) && item.value !== null) {
            summaryCache.set(code, {
              totalGdp: item.value,
              year: parseInt(item.date, 10),
            })
          }
        }
      }
    }

    // 2. Fetch GDP per capita (current US$)
    const pcapRes = await fetch(
      'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.PCAP.CD?date=2023:2024&format=json&per_page=600'
    )
    if (pcapRes.ok) {
      const data: WbResponse = await pcapRes.json()
      if (Array.isArray(data) && data.length > 1 && Array.isArray(data[1])) {
        const sortedItems = data[1].filter((item) => item.value !== null && item.countryiso3code)
        sortedItems.sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10))

        for (const item of sortedItems) {
          const code = item.countryiso3code.toUpperCase()
          if (!perCapitaCache.has(code) && item.value !== null) {
            perCapitaCache.set(code, {
              perCapita: item.value,
              year: parseInt(item.date, 10),
            })
          }
        }
      }
    }

    // 3. Fetch GDP growth rate (annual %)
    const growthRes = await fetch(
      'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.KD.ZG?date=2023:2024&format=json&per_page=600'
    )
    if (growthRes.ok) {
      const data: WbResponse = await growthRes.json()
      if (Array.isArray(data) && data.length > 1 && Array.isArray(data[1])) {
        const sortedItems = data[1].filter((item) => item.value !== null && item.countryiso3code)
        sortedItems.sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10))

        for (const item of sortedItems) {
          const code = item.countryiso3code.toUpperCase()
          if (!growthCache.has(code) && item.value !== null) {
            growthCache.set(code, {
              growth: item.value,
              year: parseInt(item.date, 10),
            })
          }
        }
      }
    }

    isBulkLoaded = true
  } catch (err) {
    console.error('Failed to load global GDP overview from World Bank Open API:', err)
  }

  return {
    gdpMap: summaryCache,
    perCapitaMap: perCapitaCache,
    growthMap: growthCache,
  }
}

/**
 * Fetches 10-year historical trajectory and in-depth indicators for a specific country.
 */
export async function fetchCountryGdpDetail(countryId: string): Promise<CountryGdpDetail> {
  const code = countryId.toUpperCase()
  if (detailCache.has(code)) {
    return detailCache.get(code)!
  }

  // Query 10-year historical range (2015 to 2024)
  const [totalRes, perCapitaRes, growthRes] = await Promise.allSettled([
    fetch(`https://api.worldbank.org/v2/country/${code}/indicator/NY.GDP.MKTP.CD?date=2015:2024&format=json`),
    fetch(`https://api.worldbank.org/v2/country/${code}/indicator/NY.GDP.PCAP.CD?date=2015:2024&format=json`),
    fetch(`https://api.worldbank.org/v2/country/${code}/indicator/NY.GDP.MKTP.KD.ZG?date=2015:2024&format=json`),
  ])

  const historyMap: Map<number, GdpYearPoint> = new Map()

  let latestYear = 2024
  let latestTotalGdp = 0
  let lastUpdated = 'World Bank Official API'

  if (totalRes.status === 'fulfilled' && totalRes.value.ok) {
    const data: WbResponse = await totalRes.value.json()
    if (data && data[0]?.lastupdated) {
      lastUpdated = `World Bank (Updated: ${data[0].lastupdated})`
    }
    if (data && Array.isArray(data[1])) {
      for (const row of data[1]) {
        if (row.value !== null) {
          const y = parseInt(row.date, 10)
          const curr = historyMap.get(y) || { year: y, gdp: 0 }
          curr.gdp = row.value
          historyMap.set(y, curr)
          if (row.value > 0 && y >= latestYear) {
            latestYear = y
            latestTotalGdp = row.value
          }
        }
      }
    }
  }

  let latestPerCapita = 0
  if (perCapitaRes.status === 'fulfilled' && perCapitaRes.value.ok) {
    const data: WbResponse = await perCapitaRes.value.json()
    if (data && Array.isArray(data[1])) {
      for (const row of data[1]) {
        if (row.value !== null) {
          const y = parseInt(row.date, 10)
          const curr = historyMap.get(y) || { year: y, gdp: 0 }
          curr.gdpPerCapita = row.value
          historyMap.set(y, curr)
          if (y === latestYear) {
            latestPerCapita = row.value
          }
        }
      }
    }
  }

  let latestGrowth: number | null = null
  if (growthRes.status === 'fulfilled' && growthRes.value.ok) {
    const data: WbResponse = await growthRes.value.json()
    if (data && Array.isArray(data[1])) {
      for (const row of data[1]) {
        if (row.value !== null) {
          const y = parseInt(row.date, 10)
          const curr = historyMap.get(y) || { year: y, gdp: 0 }
          curr.growthRate = row.value
          historyMap.set(y, curr)
          if (y === latestYear) {
            latestGrowth = row.value
          }
        }
      }
    }
  }

  const sortedPoints = Array.from(historyMap.values()).sort((a, b) => a.year - b.year)
  if (!latestTotalGdp && sortedPoints.length > 0) {
    const last = sortedPoints[sortedPoints.length - 1]
    latestYear = last.year
    latestTotalGdp = last.gdp
    latestPerCapita = last.gdpPerCapita || 0
    latestGrowth = last.growthRate ?? null
  }

  const detail: CountryGdpDetail = {
    countryCode: code,
    latestYear,
    totalGdpUsd: latestTotalGdp,
    gdpPerCapitaUsd: latestPerCapita,
    growthRatePct: latestGrowth,
    historical: sortedPoints,
    source: 'World Bank Open Data (NY.GDP.MKTP.CD)',
    lastUpdated,
  }

  detailCache.set(code, detail)
  return detail
}
