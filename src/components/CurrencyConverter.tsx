import React, { useState, useEffect } from 'react'
import { ArrowLeftRight, Calculator } from 'lucide-react'
import type { ExchangeRates, BaseCurrency, CountryMeta, Language } from '../types/economics'
import { getConversionRate } from '../services/exchangeApi'
import { formatExchangeRate } from '../utils/formatters'
import { translations } from '../i18n/translations'

interface CurrencyConverterProps {
  country: CountryMeta
  baseCurrency: BaseCurrency
  exchangeRates: ExchangeRates | null
  lang: Language
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  country,
  baseCurrency,
  exchangeRates,
  lang,
}) => {
  const t = translations[lang]
  const [amount, setAmount] = useState<number>(1000)
  const [fromCurrency, setFromCurrency] = useState<string>(country.currencyCode)
  const [toCurrency, setToCurrency] = useState<string>(baseCurrency)

  useEffect(() => {
    setFromCurrency(country.currencyCode)
    setToCurrency(baseCurrency)
    if (country.currencyCode === 'KRW') {
      setAmount(100000)
    } else if (country.currencyCode === 'JPY') {
      setAmount(10000)
    } else {
      setAmount(100)
    }
  }, [country, baseCurrency])

  if (!exchangeRates) return null

  const conversionRate = getConversionRate(exchangeRates, fromCurrency, toCurrency)
  const convertedAmount = amount * conversionRate

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-inner">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
          <Calculator className="w-4 h-4 text-indigo-400" />
          <span>{t.converterTitle}</span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono">
          1 {fromCurrency} = {formatExchangeRate(conversionRate, 4)} {toCurrency}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] gap-3 items-center">
        {/* Input Box */}
        <div className="bg-slate-950/80 border border-slate-700/60 rounded-lg p-2.5 focus-within:border-indigo-500 transition-colors">
          <div className="text-[11px] font-semibold text-slate-400 mb-1 flex justify-between">
            <span>{t.converterSending}</span>
            <span className="text-slate-300 font-bold font-mono">{fromCurrency}</span>
          </div>
          <input
            type="number"
            value={amount === 0 ? '' : amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full bg-transparent text-lg font-mono font-bold text-white focus:outline-none"
            placeholder="0"
          />
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="mx-auto p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all transform hover:rotate-180 duration-200"
          title={t.swapCurrencies}
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        {/* Output Box */}
        <div className="bg-slate-950/80 border border-slate-700/60 rounded-lg p-2.5">
          <div className="text-[11px] font-semibold text-slate-400 mb-1 flex justify-between">
            <span>{t.converterConverted}</span>
            <span className="text-indigo-400 font-bold font-mono">{toCurrency}</span>
          </div>
          <div className="text-lg font-mono font-bold text-emerald-400 overflow-x-auto truncate">
            {formatExchangeRate(convertedAmount, 2)} {toCurrency}
          </div>
        </div>
      </div>
    </div>
  )
}
