import type { ExchangeRates } from '../types/economics'

interface ErApiResponse {
  result: string
  time_last_update_utc: string
  rates: Record<string, number>
}

let cachedRates: ExchangeRates | null = null
let cacheTimestamp = 0
const CACHE_DURATION_MS = 10 * 60 * 1000 // 10 minutes cache

/**
 * Fetches real-time exchange rates on-demand with in-memory caching and fallback mechanism.
 */
export async function fetchExchangeRates(forceRefresh = false): Promise<ExchangeRates> {
  const now = Date.now()
  if (!forceRefresh && cachedRates && now - cacheTimestamp < CACHE_DURATION_MS) {
    return cachedRates
  }

  try {
    // Primary source: open.er-api.com (Supports 160+ fiat currencies, open CORS, no API key required)
    const response = await fetch('https://open.er-api.com/v6/latest/USD')
    if (!response.ok) {
      throw new Error(`Exchange rate API error: ${response.statusText}`)
    }
    const data: ErApiResponse = await response.json()

    if (data.result === 'success' && data.rates) {
      cachedRates = {
        base: 'USD',
        timeLastUpdateUtc: data.time_last_update_utc || new Date().toUTCString(),
        rates: data.rates,
      }
      cacheTimestamp = now
      return cachedRates
    }
    throw new Error('Invalid exchange API response format')
  } catch (primaryErr) {
    console.warn('Primary exchange API failed, attempting fallback to European Central Bank...', primaryErr)

    // Secondary backup: Frankfurter API (European Central Bank reference rates)
    try {
      const fbResponse = await fetch('https://api.frankfurter.dev/v1/latest?base=USD')
      if (!fbResponse.ok) throw new Error('Backup API error')
      const fbData = await fbResponse.json()

      const ratesWithUsd = {
        USD: 1,
        ...fbData.rates,
      }

      cachedRates = {
        base: 'USD',
        timeLastUpdateUtc: `${fbData.date} 16:00 CET (ECB)`,
        rates: ratesWithUsd,
      }
      cacheTimestamp = now
      return cachedRates
    } catch (backupErr) {
      console.error('All exchange rate providers failed:', backupErr)
      if (cachedRates) return cachedRates // Return stale cached rates if available
      throw new Error('Failed to retrieve exchange rate data from public providers.')
    }
  }
}

/**
 * Calculates conversion multiplier between two currencies: 1 unit of fromCurrency = X units of toCurrency.
 */
export function getConversionRate(
  exchangeRates: ExchangeRates,
  fromCurrency: string,
  toCurrency: string
): number {
  if (fromCurrency === toCurrency) return 1
  const fromRate = exchangeRates.rates[fromCurrency]
  const toRate = exchangeRates.rates[toCurrency]

  if (!fromRate || !toRate) return 0
  return toRate / fromRate
}
