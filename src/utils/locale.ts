import type { Language, BaseCurrency } from '../types/economics'

const STORAGE_LANG_KEY = 'geconomics_lang'
const STORAGE_CURRENCY_KEY = 'geconomics_base_currency'

/**
 * Detects initial language based on explicit user preference (localStorage)
 * or browser navigator language settings.
 */
export function detectBrowserLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_LANG_KEY) || localStorage.getItem('globalecon_lang')
    if (saved === 'ko' || saved === 'en') {
      return saved
    }

    if (typeof navigator !== 'undefined') {
      const candidates = [
        navigator.language,
        ...(navigator.languages || []),
      ].filter(Boolean)

      for (const cand of candidates) {
        const lower = cand.toLowerCase()
        if (lower.startsWith('ko')) {
          return 'ko'
        }
      }
    }
  }

  return 'en'
}

/**
 * Detects appropriate base currency based on explicit user preference
 * or browser locale and geographic hints.
 */
export function detectBrowserBaseCurrency(): BaseCurrency {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_CURRENCY_KEY) || localStorage.getItem('globalecon_base_currency')
    if (saved && ['USD', 'EUR', 'KRW', 'JPY', 'GBP', 'CNY'].includes(saved)) {
      return saved as BaseCurrency
    }

    if (typeof navigator !== 'undefined') {
      const locale = (navigator.language || '').toLowerCase()
      const timeZone = Intl?.DateTimeFormat?.()?.resolvedOptions?.()?.timeZone || ''

      // Korea detection
      if (locale.includes('kr') || locale.startsWith('ko') || timeZone.includes('Seoul')) {
        return 'KRW'
      }

      // Japan detection
      if (locale.includes('jp') || locale.startsWith('ja') || timeZone.includes('Tokyo')) {
        return 'JPY'
      }

      // United Kingdom detection
      if (locale.includes('gb') || locale === 'en-gb' || timeZone.includes('London')) {
        return 'GBP'
      }

      // China detection
      if (locale.includes('cn') || locale.startsWith('zh') || timeZone.includes('Shanghai')) {
        return 'CNY'
      }

      // Eurozone countries detection
      const eurozoneHints = ['de', 'fr', 'es', 'it', 'nl', 'be', 'at', 'ie', 'fi', 'pt', 'gr', 'paris', 'berlin', 'rome', 'madrid', 'amsterdam', 'brussels']
      if (eurozoneHints.some((hint) => locale.includes(hint) || timeZone.toLowerCase().includes(hint))) {
        return 'EUR'
      }
    }
  }

  return 'USD'
}

/**
 * Persists user-selected language to localStorage and updates HTML element.
 */
export function saveLanguagePreference(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_LANG_KEY, lang)
    document.documentElement.lang = lang
  }
}

/**
 * Persists user-selected base currency to localStorage.
 */
export function saveBaseCurrencyPreference(currency: BaseCurrency): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_CURRENCY_KEY, currency)
  }
}
