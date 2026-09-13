export interface StockPoint {
  date: string
  close: number
}

export interface StockPriceInfo {
  countryId: string
  nameEn: string
  nameKo: string
  ticker: string
  isSupported: boolean
  fallbackReasonEn?: string
  fallbackReasonKo?: string
  currency: string
  currentPrice: number
  changePct: number
  points: StockPoint[]
}

// In-memory cache for ultra-fast instant lookups without bundle bloat
let cachedStockData: Record<string, StockPriceInfo> | null = null
let pendingLoad: Promise<Record<string, StockPriceInfo>> | null = null

const SESSION_CACHE_KEY = 'geonomics_stock_cache_v1'
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes in-memory / sessionStorage cache

/**
 * Loads stock price and benchmark index data on-demand asynchronously.
 * Flow: In-memory cache -> sessionStorage (TTL) -> On-demand fetch from static asset.
 */
export async function loadStockPrices(forceRefresh = false): Promise<Record<string, StockPriceInfo>> {
  if (!forceRefresh && cachedStockData) {
    return cachedStockData
  }

  // Check sessionStorage if available
  if (!forceRefresh && typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(SESSION_CACHE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data) {
          cachedStockData = parsed.data
          return cachedStockData!
        }
      }
    } catch {
      // sessionStorage restricted or quota exceeded
    }
  }

  if (pendingLoad) {
    return pendingLoad
  }

  pendingLoad = (async () => {
    try {
      const baseUrl = import.meta.env.BASE_URL || '/'
      const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
      const url = `${cleanBase}data/stockPricesData.json`

      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} while fetching on-demand stock prices`)
      }
      const data: Record<string, StockPriceInfo> = await res.json()
      cachedStockData = data

      if (typeof window !== 'undefined' && window.sessionStorage) {
        try {
          sessionStorage.setItem(
            SESSION_CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data })
          )
        } catch {
          // Ignore cache write errors
        }
      }

      return cachedStockData
    } catch (err) {
      console.warn('Failed to load stock price data on-demand:', err)
      return cachedStockData || {}
    } finally {
      pendingLoad = null
    }
  })()

  return pendingLoad
}

/**
 * Synchronous accessor for currently loaded stock data.
 */
export const getStockPriceData = (countryId: string): StockPriceInfo | undefined => {
  return cachedStockData?.[countryId]
}

/**
 * Returns all currently loaded stock price entries.
 */
export const getAllStockPrices = (): Record<string, StockPriceInfo> => {
  return cachedStockData || {}
}
