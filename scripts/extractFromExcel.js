import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const XLSX = require('xlsx')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.resolve(__dirname, '..')

function getExcelPath(fileName) {
  const docsPath = path.join(projectRoot, 'docs', 'data', fileName)
  if (fs.existsSync(docsPath)) return docsPath
  const publicPath = path.join(projectRoot, 'public', 'data', fileName)
  if (fs.existsSync(publicPath)) return publicPath
  throw new Error('Excel file not found in docs/data or public/data: ' + fileName)
}

const gdpFilePath = getExcelPath('gdp-20260913.xls')
const debtFilePath = getExcelPath('debt-20260913.xls')
const growthFilePath = getExcelPath('gdp-growth-20260913.xls')

console.log('Using Excel sources:')
console.log(' - GDP:', gdpFilePath)
console.log(' - Debt:', debtFilePath)
console.log(' - Growth:', growthFilePath)

const countriesPath = path.join(projectRoot, 'src', 'data', 'countries.ts')
const countriesContent = fs.readFileSync(countriesPath, 'utf8')

const countryBlocks = countriesContent.split(/\{\s*id:/).slice(1)
const COUNTRIES = []

for (const block of countryBlocks) {
  const idMatch = block.match(/^\s*'([A-Z]{3})'/)
  const nameEnMatch = block.match(/nameEn:\s*'([^']+)'/)
  if (idMatch && nameEnMatch) {
    COUNTRIES.push({ id: idMatch[1], nameEn: nameEnMatch[1] })
  }
}

console.log('Loaded ' + COUNTRIES.length + ' tracked countries from countries.ts')

const ALIAS_MAP = {
  'South Korea': 'Korea, Republic of',
  'Turkey': 'Türkiye, Republic of',
  'Taiwan': 'Taiwan Province of China',
  'Egypt': 'Egypt, Arab Republic of',
  'United Arab Emirates': 'United Arab Emirates',
  'Russia': 'Russian Federation',
  'Vietnam': 'Vietnam',
  'Iran': 'Islamic Republic of Iran',
  'Hong Kong': 'Hong Kong SAR',
  'Czech Republic': 'Czech Republic',
}

const gdpWb = XLSX.readFile(gdpFilePath)
const gdpRows = XLSX.utils.sheet_to_json(gdpWb.Sheets[gdpWb.SheetNames[0]], { header: 1 })
const gdpHeader = gdpRows[0]

const debtWb = XLSX.readFile(debtFilePath)
const debtRows = XLSX.utils.sheet_to_json(debtWb.Sheets[debtWb.SheetNames[0]], { header: 1 })
const debtHeader = debtRows[0]

const growthWb = XLSX.readFile(growthFilePath)
const growthRows = XLSX.utils.sheet_to_json(growthWb.Sheets[growthWb.SheetNames[0]], { header: 1 })
const growthHeader = growthRows[0]

// Read existing json to preserve population reference ratios
const existingJsonPath = path.join(projectRoot, 'src', 'data', 'excelEconomicData.json')
let existing = {}
if (fs.existsSync(existingJsonPath)) {
  try {
    existing = JSON.parse(fs.readFileSync(existingJsonPath, 'utf8'))
  } catch (e) {
    console.warn('Could not read existing json for population ratio:', e.message)
  }
}

const targetYears = [
  '2015', '2016', '2017', '2018', '2019', '2020',
  '2021', '2022', '2023', '2024', '2025', '2026',
  '2027', '2028', '2029', '2030'
]

const result = {}

for (const c of COUNTRIES) {
  const target = (ALIAS_MAP[c.nameEn] || c.nameEn).toLowerCase()
  const gRow = gdpRows.find(
    (r) => r && r[0] && (r[0].toLowerCase() === target || r[0].toLowerCase().includes(target))
  )
  const dRow = debtRows.find(
    (r) => r && r[0] && (r[0].toLowerCase() === target || r[0].toLowerCase().includes(target))
  )
  const grRow = growthRows.find(
    (r) => r && r[0] && (r[0].toLowerCase() === target || r[0].toLowerCase().includes(target))
  )

  const yearsObj = {}
  const historicalList = []

  for (const y of targetYears) {
    const yNum = parseInt(y, 10)
    const gCol = gdpHeader.indexOf(yNum)
    const dCol = debtHeader.indexOf(yNum)
    const grCol = growthHeader.indexOf(yNum)

    const rawGdpBillion =
      gCol !== -1 && gRow && typeof gRow[gCol] === 'number'
        ? gRow[gCol]
        : existing[c.id]?.years?.[y]?.totalGdpUsd
        ? existing[c.id].years[y].totalGdpUsd / 1e9
        : 0
    const totalGdpUsd = Math.round(rawGdpBillion * 1e9)

    let debtRatioPct =
      dCol !== -1 && dRow && typeof dRow[dCol] === 'number'
        ? Math.round(dRow[dCol] * 10) / 10
        : existing[c.id]?.years?.[y]?.debtRatioPct ?? null

    if (debtRatioPct === null && yNum >= 2024) {
      const d2024Col = debtHeader.indexOf(2024)
      if (d2024Col !== -1 && dRow && typeof dRow[d2024Col] === 'number') {
        debtRatioPct = Math.round(dRow[d2024Col] * 10) / 10
      }
    }

    const growthRatePct =
      grCol !== -1 && grRow && typeof grRow[grCol] === 'number'
        ? Math.round(grRow[grCol] * 10) / 10
        : existing[c.id]?.years?.[y]?.growthRatePct ?? null

    let gdpPerCapitaUsd = existing[c.id]?.years?.[y]?.gdpPerCapitaUsd ?? 0
    if (existing[c.id]?.years?.[y]?.totalGdpUsd && gdpPerCapitaUsd > 0) {
      const pop = existing[c.id].years[y].totalGdpUsd / gdpPerCapitaUsd
      gdpPerCapitaUsd = Math.round((totalGdpUsd / pop) * 100) / 100
    }

    yearsObj[y] = {
      totalGdpUsd,
      gdpPerCapitaUsd,
      growthRatePct,
      debtRatioPct,
    }

    historicalList.push({
      year: yNum,
      gdp: totalGdpUsd,
      gdpPerCapita: gdpPerCapitaUsd,
      growthRate: growthRatePct,
      debtRatio: debtRatioPct,
    })
  }

  result[c.id] = {
    countryId: c.id,
    countryName: c.nameEn,
    source: 'IMF DataMapper Official Export (.xls)',
    lastUpdated: 'IMF WEO Official Export (September 2026)',
    years: yearsObj,
    historical: historicalList,
  }
}

const outputTargets = [
  path.join(projectRoot, 'src', 'data', 'excelEconomicData.json'),
  path.join(projectRoot, 'public', 'data', 'excelEconomicData.json'),
  path.join(projectRoot, 'docs', 'data', 'excelEconomicData.json'),
]

const jsonContent = JSON.stringify(result, null, 2)

for (const target of outputTargets) {
  const dir = path.dirname(target)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(target, jsonContent, 'utf8')
  console.log('Saved extracted data to: ' + path.relative(projectRoot, target))
}

console.log('Successfully extracted and updated economic data for all ' + Object.keys(result).length + ' countries from Excel!')
