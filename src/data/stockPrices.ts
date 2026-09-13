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

/**
 * Optional stock price loader. Operates safely without requiring any stockPricesData.json file.
 */
export async function loadStockPrices(): Promise<Record<string, StockPriceInfo>> {
  return {}
}

/**
 * Synchronous accessor for stock data. Safely returns undefined when no stock data is provided.
 */
export const getStockPriceData = (_countryId: string): StockPriceInfo | undefined => {
  return undefined
}

/**
 * Returns all stock price entries.
 */
export const getAllStockPrices = (): Record<string, StockPriceInfo> => {
  return {}
}
