export type Region = 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania'

export type Language = 'en' | 'ko'

export interface CountryMeta {
  id: string // ISO 3166-1 alpha-3 (World Bank API country id, e.g., 'KOR', 'USA')
  iso2: string // ISO 3166-1 alpha-2 (e.g., 'KR', 'US')
  nameKo: string
  nameEn: string
  currencyCode: string // e.g., 'KRW', 'USD'
  currencyNameEn: string
  currencyNameKo: string
  currencySymbol: string
  region: Region
  flagEmoji: string
}

export interface GdpYearPoint {
  year: number
  gdp: number // Current US$
  gdpPerCapita?: number // Current US$
  growthRate?: number // Annual %
}

export interface CountryGdpDetail {
  countryCode: string
  latestYear: number
  totalGdpUsd: number
  gdpPerCapitaUsd: number
  growthRatePct: number | null
  historical: GdpYearPoint[]
  source: string
  lastUpdated: string
}

export interface ExchangeRates {
  base: string
  timeLastUpdateUtc: string
  rates: Record<string, number>
}

export interface EconomySummary {
  country: CountryMeta
  totalGdpUsd: number
  gdpPerCapitaUsd: number
  growthRatePct: number | null
  rank: number
  latestYear: number
  exchangeRateVsBase: number
  rateToBase: number
}

export type BaseCurrency = 'USD' | 'EUR' | 'KRW' | 'JPY' | 'GBP' | 'CNY'
