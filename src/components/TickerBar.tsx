import React from 'react'
import { TrendingUp, Clock } from 'lucide-react'
import type { ExchangeRates, BaseCurrency, Language } from '../types/economics'
import { getConversionRate } from '../services/exchangeApi'
import { formatExchangeRate } from '../utils/formatters'
import { translations } from '../i18n/translations'

interface TickerBarProps {
  exchangeRates: ExchangeRates | null
  baseCurrency: BaseCurrency
  lang: Language
}

export const TickerBar: React.FC<TickerBarProps> = ({ exchangeRates, baseCurrency, lang }) => {
  if (!exchangeRates) return null

  const t = translations[lang]

  // Key currency codes to display in top ticker bar
  const keyCurrencies = ['USD', 'EUR', 'JPY', 'CNY', 'GBP', 'KRW'].filter((c) => c !== baseCurrency)

  return (
    <div className="bg-slate-900 border-b border-slate-800/80 py-2.5 px-4 overflow-x-auto text-xs text-slate-300 scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 min-w-max">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          <span>{t.tickerTitle} ({baseCurrency})</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {keyCurrencies.map((curr) => {
            const isJpy = curr === 'JPY'
            const multiplier = isJpy ? 100 : 1
            const rate = getConversionRate(exchangeRates, curr, baseCurrency) * multiplier

            return (
              <div
                key={curr}
                className="flex items-center gap-2 bg-slate-950/70 border border-slate-800 px-3 py-1 rounded-lg hover:border-slate-700 transition-colors"
              >
                <span className="font-bold text-slate-200">
                  {isJpy ? '100 JPY' : `1 ${curr}`}
                </span>
                <span className="text-slate-500">→</span>
                <span className="font-mono font-semibold text-emerald-400">
                  {formatExchangeRate(rate, isJpy ? 2 : 2)} {baseCurrency}
                </span>
              </div>
            )
          })}
        </div>

        <div className="flex items-center gap-1 text-[11px] text-slate-400">
          <Clock className="w-3 h-3" />
          <span>{t.asOf} {exchangeRates.timeLastUpdateUtc.replace('00:00:00', '').trim()}</span>
        </div>
      </div>
    </div>
  )
}
