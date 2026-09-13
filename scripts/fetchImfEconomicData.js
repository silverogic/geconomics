import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read country IDs from countries.ts
const countriesFilePath = path.resolve(__dirname, '../src/data/countries.ts')
const countriesContent = fs.readFileSync(countriesFilePath, 'utf8')
const matches = countriesContent.match(/id:\s*'([A-Z]{3})'/g) || []
const COUNTRY_IDS = matches.map((m) => m.match(/id:\s*'([A-Z]{3})'/)[1])

console.log(`Loaded ${COUNTRY_IDS.length} countries from countries.ts`)

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`)
  return res.json()
}

async function main() {
  console.log('Fetching IMF DataMapper endpoints for Debt, GDP, Per Capita, and Growth...')

  const [debtRes, gdpRes, pcapRes, growthRes] = await Promise.all([
    fetchJson('https://www.imf.org/external/datamapper/api/v1/GGXWDG_NGDP'),
    fetchJson('https://www.imf.org/external/datamapper/api/v1/NGDPD'),
    fetchJson('https://www.imf.org/external/datamapper/api/v1/NGDPDPC'),
    fetchJson('https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH'),
  ])

  const debtData = debtRes.values?.GGXWDG_NGDP || {}
  const gdpData = gdpRes.values?.NGDPD || {}
  const pcapData = pcapRes.values?.NGDPDPC || {}
  const growthData = growthRes.values?.NGDP_RPCH || {}

  const result = {}
  const currentYr = new Date().getFullYear()
  const maxYear = Math.max(2030, currentYr + 4)
  const targetYears = []
  for (let y = 2015; y <= maxYear; y++) {
    targetYears.push(y.toString())
  }

  for (const id of COUNTRY_IDS) {
    const debtObj = debtData[id] || {}
    const gdpObj = gdpData[id] || {}
    const pcapObj = pcapData[id] || {}
    const growthObj = growthData[id] || {}

    // Build multi-year overview metrics
    const yearsOverview = {}
    for (const y of targetYears) {
      // Fallback logic for countries missing future years
      const prevY = (parseInt(y, 10) - 1).toString()
      const rawGdpBillion = gdpObj[y] ?? gdpObj[prevY] ?? 0
      const rawPcap = pcapObj[y] ?? pcapObj[prevY] ?? 0
      const rawGrowth = growthObj[y] ?? growthObj[prevY] ?? null
      const rawDebt = debtObj[y] ?? debtObj[prevY] ?? null

      yearsOverview[y] = {
        totalGdpUsd: Number((rawGdpBillion * 1e9).toFixed(0)),
        gdpPerCapitaUsd: Number(Number(rawPcap).toFixed(2)),
        growthRatePct: rawGrowth !== null ? Number(Number(rawGrowth).toFixed(2)) : null,
        debtRatioPct: rawDebt !== null ? Number(Number(rawDebt).toFixed(2)) : null,
      }
    }

    // Build historical trajectory (2015 - maxYear)
    const historical = []
    for (let yr = 2015; yr <= maxYear; yr++) {
      const yrStr = yr.toString()
      const gdpBillion = gdpObj[yrStr]
      if (gdpBillion !== undefined && gdpBillion !== null && !isNaN(gdpBillion)) {
        historical.push({
          year: yr,
          gdp: Number((gdpBillion * 1e9).toFixed(0)),
          gdpPerCapita: pcapObj[yrStr] ? Number(Number(pcapObj[yrStr]).toFixed(2)) : undefined,
          growthRate: growthObj[yrStr] ? Number(Number(growthObj[yrStr]).toFixed(2)) : undefined,
          debtRatio: debtObj[yrStr] ? Number(Number(debtObj[yrStr]).toFixed(2)) : undefined,
        })
      }
    }

    result[id] = {
      countryId: id,
      years: yearsOverview,
      historical,
      source: 'IMF World Economic Outlook (WEO)',
      lastUpdated: 'IMF WEO Official Database',
    }
  }

  const outDirSrc = path.resolve(__dirname, '../src/data')
  const outDirPub = path.resolve(__dirname, '../public/data')
  const outDirDocs = path.resolve(__dirname, '../docs/data')

  if (!fs.existsSync(outDirPub)) fs.mkdirSync(outDirPub, { recursive: true })
  if (!fs.existsSync(outDirDocs)) fs.mkdirSync(outDirDocs, { recursive: true })

  const jsonStr = JSON.stringify(result, null, 2)
  fs.writeFileSync(path.join(outDirSrc, 'imfEconomicData.json'), jsonStr, 'utf8')
  fs.writeFileSync(path.join(outDirPub, 'imfEconomicData.json'), jsonStr, 'utf8')
  fs.writeFileSync(path.join(outDirDocs, 'imfEconomicData.json'), jsonStr, 'utf8')

  console.log(`\nSuccessfully processed all ${Object.keys(result).length} countries into imfEconomicData.json!`)
}

main().catch((err) => {
  console.error('Failed to fetch IMF data:', err)
  process.exit(1)
})
