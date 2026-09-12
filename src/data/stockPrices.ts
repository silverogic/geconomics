import stockPricesData from './stockPricesData.json'

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

const STOCK_DATA: Record<string, StockPriceInfo> = stockPricesData as Record<string, StockPriceInfo>

export const getStockPriceData = (countryId: string): StockPriceInfo | undefined => {
  return STOCK_DATA[countryId]
}

export const getAllStockPrices = (): Record<string, StockPriceInfo> => {
  return STOCK_DATA
}
