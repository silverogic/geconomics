import React, { useEffect, useState } from 'react'
import { X, ExternalLink, ShieldCheck, TrendingUp, TrendingDown, Coins, Award } from 'lucide-react'
import type { CountryMeta, CountryGdpDetail, BaseCurrency, ExchangeRates, Language } from '../types/economics'
import { fetchCountryGdpDetail } from '../services/worldBankApi'
import { getConversionRate } from '../services/exchangeApi'
import { formatGdpCompact, formatPerCapita, formatExchangeRate } from '../utils/formatters'
import { GdpChart } from './GdpChart'
import { CurrencyConverter } from './CurrencyConverter'
import { translations } from '../i18n/translations'

interface CountryModalProps {
  country: CountryMeta
  rank: number
  baseCurrency: BaseCurrency
  exchangeRates: ExchangeRates | null
  lang: Language
  onClose: () => void
}

export const CountryModal: React.FC<CountryModalProps> = ({
  country,
  rank,
  baseCurrency,
  exchangeRates,
  lang,
  onClose,
}) => {
  const t = translations[lang]
  const [detail, setDetail] = useState<CountryGdpDetail | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)

    fetchCountryGdpDetail(country.id)
      .then((res) => {
        if (isMounted) {
          setDetail(res)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.error('Failed to load country detail:', err)
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [country.id])

  // Conversion rates
  const usdToBase = exchangeRates ? getConversionRate(exchangeRates, 'USD', baseCurrency) : 1
  const countryToBase = exchangeRates
    ? getConversionRate(exchangeRates, country.currencyCode, baseCurrency)
    : 0
  const baseToCountry = exchangeRates
    ? getConversionRate(exchangeRates, baseCurrency, country.currencyCode)
    : 0

  const displayName = lang === 'ko' ? country.nameKo : country.nameEn
  const secondaryName = lang === 'ko' ? country.nameEn : country.nameKo
  const currencyName = lang === 'ko' ? country.currencyNameKo : country.currencyNameEn

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3.5">
            {/* Styled ISO Code Badge (No Emoji) */}
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-base text-indigo-300 shadow-inner">
              {country.iso2}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-black text-white">{displayName}</h2>
                <span className="text-sm text-slate-400 font-medium">({secondaryName})</span>
                <span className="text-xs px-2 py-0.5 rounded-md font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {country.id} / {country.iso2}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.modalContinent}: {country.region} • {t.modalCurrency}: {currencyName} ({country.currencyCode} {country.currencySymbol})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Total GDP */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {t.modalTotalGdpTitle} ({detail?.latestYear ?? '2024'})
              </span>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {detail ? formatGdpCompact(detail.totalGdpUsd, baseCurrency, usdToBase, lang) : t.loadingData}
              </div>
              <span className="text-xs text-indigo-400 font-mono">
                {detail ? `$${(detail.totalGdpUsd / 1e12).toFixed(2)}T USD` : ''}
              </span>
            </div>

            {/* GDP Per Capita */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {t.modalPerCapitaTitle}
              </span>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {detail ? formatPerCapita(detail.gdpPerCapitaUsd, baseCurrency, usdToBase, lang) : t.loadingData}
              </div>
              <span className="text-xs text-indigo-400 font-mono">
                {detail ? `$${Math.round(detail.gdpPerCapitaUsd).toLocaleString()} USD` : ''}
              </span>
            </div>

            {/* Annual Growth Rate */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {t.modalGrowthTitle}
              </span>
              <div
                className={`text-lg sm:text-xl font-bold flex items-center gap-1 ${
                  detail?.growthRatePct !== null && (detail?.growthRatePct ?? 0) >= 0
                    ? 'text-emerald-400'
                    : 'text-rose-400'
                }`}
              >
                {detail?.growthRatePct !== null && (detail?.growthRatePct ?? 0) >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {detail?.growthRatePct !== null && detail?.growthRatePct !== undefined
                  ? `${detail.growthRatePct > 0 ? '+' : ''}${detail.growthRatePct.toFixed(2)}%`
                  : 'N/A'}
              </div>
              <span className="text-[11px] text-slate-500">{t.modalRealGrowth}</span>
            </div>

            {/* Global Rank */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {t.modalRankTitle}
              </span>
              <div className="text-lg sm:text-xl font-bold text-amber-400 flex items-center gap-1.5">
                <Award className="w-5 h-5 text-amber-400" />
                <span>{t.modalRankValue.replace('{rank}', rank.toString())}</span>
              </div>
              <span className="text-[11px] text-slate-500">{t.modalRankSub}</span>
            </div>
          </div>

          {/* Real-time Exchange Rate Banner */}
          <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/40 rounded-xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-1">
                  <Coins className="w-4 h-4 text-indigo-400" />
                  <span>{t.modalFxSectionTitle}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
                    {t.modalOnDemandBadge}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-white">
                  1 {country.currencyCode} = {formatExchangeRate(countryToBase, 4)} {baseCurrency}
                  <span className="text-xs text-slate-400 font-normal ml-3">
                    (1 {baseCurrency} = {formatExchangeRate(baseToCountry, 2)} {country.currencyCode})
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 sm:text-right">
                <span className="block text-slate-500">{t.modalForexTimestamp}</span>
                <span className="font-mono text-slate-300">
                  {exchangeRates?.timeLastUpdateUtc || 'Live Feed'}
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Currency Converter */}
          <CurrencyConverter
            country={country}
            baseCurrency={baseCurrency}
            exchangeRates={exchangeRates}
            lang={lang}
          />

          {/* 10-Year Historical GDP Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-200">
                {t.modalChartTitle.replace('{year}', (detail?.latestYear ?? 2024).toString())}
              </h4>
              <span className="text-[11px] text-slate-400">
                {t.modalChartUnit.replace('{base}', baseCurrency)}
              </span>
            </div>

            {isLoading ? (
              <div className="h-72 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800">
                <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
                  <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.modalChartLoading}</span>
                </div>
              </div>
            ) : (
              <GdpChart
                countryName={displayName}
                dataPoints={detail?.historical || []}
                baseCurrency={baseCurrency}
                exchangeRateToBase={usdToBase}
                lang={lang}
              />
            )}
          </div>

          {/* Authoritative Source Transparency */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.modalAccuracyTitle}</span>
            </div>
            <p>• {t.modalAccuracyGdp}</p>
            <p>• {t.modalAccuracyFx}</p>
            <div className="pt-1 flex items-center gap-4 text-indigo-400">
              <a
                href={`https://data.worldbank.org/country/${country.id.toLowerCase()}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <span>{t.modalWorldBankLink}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
          >
            {t.modalClose}
          </button>
        </div>
      </div>
    </div>
  )
}
