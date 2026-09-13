export const CURRENT_YEAR_NUM = new Date().getFullYear()
export const CURRENT_YEAR_STR = String(CURRENT_YEAR_NUM)

export const CURRENT_MINUS_1_NUM = CURRENT_YEAR_NUM - 1
export const CURRENT_MINUS_1_STR = String(CURRENT_MINUS_1_NUM)

export const CURRENT_MINUS_2_NUM = CURRENT_YEAR_NUM - 2
export const CURRENT_MINUS_2_STR = String(CURRENT_MINUS_2_NUM)

export interface EconomicYearOption {
  year: string
  yearNum: number
  offset: number
  labelKey: 'yearCurrent' | 'yearPrev1' | 'yearPrev2'
}

/**
 * Economic Year Options dynamically anchored to current calendar year:
 * 1. 현재 년도 (Current Year, e.g. 2026)
 * 2. 현재 년도 -1 (Current Year - 1, e.g. 2025)
 * 3. 현재 년도 -2 (Current Year - 2, e.g. 2024)
 */
export const ECONOMIC_YEAR_OPTIONS: EconomicYearOption[] = [
  {
    year: CURRENT_YEAR_STR,
    yearNum: CURRENT_YEAR_NUM,
    offset: 0,
    labelKey: 'yearCurrent',
  },
  {
    year: CURRENT_MINUS_1_STR,
    yearNum: CURRENT_MINUS_1_NUM,
    offset: -1,
    labelKey: 'yearPrev1',
  },
  {
    year: CURRENT_MINUS_2_STR,
    yearNum: CURRENT_MINUS_2_NUM,
    offset: -2,
    labelKey: 'yearPrev2',
  },
]
