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

/**
 * Official macroeconomic data for Taiwan (TWN) sourced from IMF World Economic Outlook (WEO)
 * and DGBAS (Directorate-General of Budget, Accounting and Statistics, Taiwan).
 * Note: World Bank Open Data omits Taiwan due to UN/World Bank geopolitical membership policy.
 */
export const TAIWAN_IMF_DATA: CountryGdpDetail = {
  countryCode: 'TWN',
  latestYear: 2024,
  totalGdpUsd: 801_495_000_000,
  gdpPerCapitaUsd: 34_252,
  growthRatePct: 5.3,
  historical: [
    { year: 2015, gdp: 534_515_000_000, gdpPerCapita: 22_753, growthRate: 1.5 },
    { year: 2016, gdp: 543_081_000_000, gdpPerCapita: 23_071, growthRate: 2.2 },
    { year: 2017, gdp: 591_687_000_000, gdpPerCapita: 25_102, growthRate: 3.7 },
    { year: 2018, gdp: 610_690_000_000, gdpPerCapita: 25_889, growthRate: 2.9 },
    { year: 2019, gdp: 613_512_000_000, gdpPerCapita: 25_993, growthRate: 3.1 },
    { year: 2020, gdp: 676_861_000_000, gdpPerCapita: 28_728, growthRate: 3.4 },
    { year: 2021, gdp: 776_965_000_000, gdpPerCapita: 33_239, growthRate: 6.7 },
    { year: 2022, gdp: 765_624_000_000, gdpPerCapita: 32_909, growthRate: 2.7 },
    { year: 2023, gdp: 757_387_000_000, gdpPerCapita: 32_339, growthRate: 1.1 },
    { year: 2024, gdp: 801_495_000_000, gdpPerCapita: 34_252, growthRate: 5.3 },
  ],
  source: 'IMF World Economic Outlook (DGBAS Taiwan)',
  lastUpdated: 'IMF WEO / DGBAS Official Statistics',
}

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

    // Ensure Taiwan (TWN) official fallback is populated from IMF WEO
    if (!summaryCache.has('TWN')) {
      summaryCache.set('TWN', {
        totalGdp: TAIWAN_IMF_DATA.totalGdpUsd,
        year: TAIWAN_IMF_DATA.latestYear,
      })
    }
    if (!perCapitaCache.has('TWN')) {
      perCapitaCache.set('TWN', {
        perCapita: TAIWAN_IMF_DATA.gdpPerCapitaUsd,
        year: TAIWAN_IMF_DATA.latestYear,
      })
    }
    if (!growthCache.has('TWN')) {
      growthCache.set('TWN', {
        growth: TAIWAN_IMF_DATA.growthRatePct!,
        year: TAIWAN_IMF_DATA.latestYear,
      })
    }

    isBulkLoaded = true
  } catch (err) {
    console.error('Failed to load global GDP overview from World Bank Open API:', err)
  }

  // Double check Taiwan in case of fetch failure
  if (!summaryCache.has('TWN')) {
    summaryCache.set('TWN', {
      totalGdp: TAIWAN_IMF_DATA.totalGdpUsd,
      year: TAIWAN_IMF_DATA.latestYear,
    })
    perCapitaCache.set('TWN', {
      perCapita: TAIWAN_IMF_DATA.gdpPerCapitaUsd,
      year: TAIWAN_IMF_DATA.latestYear,
    })
    growthCache.set('TWN', {
      growth: TAIWAN_IMF_DATA.growthRatePct!,
      year: TAIWAN_IMF_DATA.latestYear,
    })
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

  // Official fallback for Taiwan (TWN) not indexed in World Bank Open Data
  if (code === 'TWN') {
    detailCache.set('TWN', TAIWAN_IMF_DATA)
    return TAIWAN_IMF_DATA
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
