import React, { useState, useEffect } from 'react'
import { GitCompare, ArrowRightLeft, TrendingUp } from 'lucide-react'
import { COUNTRIES } from '../data/countries'
import type { CountryGdpDetail, BaseCurrency, ExchangeRates, Language } from '../types/economics'
import { fetchCountryGdpDetail } from '../services/worldBankApi'
import { getConversionRate } from '../services/exchangeApi'
import { formatGdpCompact, formatPerCapita, formatExchangeRate } from '../utils/formatters'
import { GdpChart } from './GdpChart'
import { translations } from '../i18n/translations'

interface CompareViewProps {
  baseCurrency: BaseCurrency
  exchangeRates: ExchangeRates | null
  lang: Language
}

export const CompareView: React.FC<CompareViewProps> = ({
  baseCurrency,
  exchangeRates,
  lang,
}) => {
  const t = translations[lang]
  const [countryAId, setCountryAId] = useState<string>('USA')
  const [countryBId, setCountryBId] = useState<string>('CHN')

  const [detailA, setDetailA] = useState<CountryGdpDetail | null>(null)
  const [detailB, setDetailB] = useState<CountryGdpDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const countryA = COUNTRIES.find((c) => c.id === countryAId) || COUNTRIES[0]
  const countryB = COUNTRIES.find((c) => c.id === countryBId) || COUNTRIES[1]

  useEffect(() => {
    let active = true
    setLoading(true)

    Promise.all([fetchCountryGdpDetail(countryA.id), fetchCountryGdpDetail(countryB.id)])
      .then(([resA, resB]) => {
        if (active) {
          setDetailA(resA)
          setDetailB(resB)
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error('Failed to load comparison details:', err)
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [countryA.id, countryB.id])

  const handleSwap = () => {
    const temp = countryAId
    setCountryAId(countryBId)
    setCountryBId(temp)
  }

  const setPreset = (a: string, b: string) => {
    setCountryAId(a)
    setCountryBId(b)
  }

  const usdToBase = exchangeRates ? getConversionRate(exchangeRates, 'USD', baseCurrency) : 1
  const rateA = exchangeRates ? getConversionRate(exchangeRates, countryA.currencyCode, baseCurrency) : 0
  const rateB = exchangeRates ? getConversionRate(exchangeRates, countryB.currencyCode, baseCurrency) : 0

  const gdpRatio = detailA && detailB && detailB.totalGdpUsd > 0 ? detailA.totalGdpUsd / detailB.totalGdpUsd : 1
  const perCapitaRatio = detailA && detailB && detailB.gdpPerCapitaUsd > 0 ? detailA.gdpPerCapitaUsd / detailB.gdpPerCapitaUsd : 1

  const nameA = lang === 'ko' ? countryA.nameKo : countryA.nameEn
  const nameB = lang === 'ko' ? countryB.nameKo : countryB.nameEn

  const insightFormatted = t.compareInsightText
    .replace('{countryA}', nameA)
    .replace('{countryB}', nameB)
    .replace('{gdpRatio}', gdpRatio.toFixed(2))
    .replace('{perCapitaRatio}', perCapitaRatio.toFixed(2))

  return (
    <div className="space-y-6">
      {/* Top Header & Presets */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <GitCompare className="w-6 h-6 text-indigo-400" />
              {t.compareTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.compareDescription}
            </p>
          </div>

          {/* Preset Buttons with Flags */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 mr-1 font-medium">{t.compareRecommended}</span>
            <button
              onClick={() => setPreset('USA', 'CHN')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {COUNTRIES.find((c) => c.id === 'USA')?.flagEmoji} USA vs {COUNTRIES.find((c) => c.id === 'CHN')?.flagEmoji} CHN
            </button>
            <button
              onClick={() => setPreset('KOR', 'JPN')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {COUNTRIES.find((c) => c.id === 'KOR')?.flagEmoji} KOR vs {COUNTRIES.find((c) => c.id === 'JPN')?.flagEmoji} JPN
            </button>
            <button
              onClick={() => setPreset('DEU', 'GBR')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {COUNTRIES.find((c) => c.id === 'DEU')?.flagEmoji} DEU vs {COUNTRIES.find((c) => c.id === 'GBR')?.flagEmoji} GBR
            </button>
            <button
              onClick={() => setPreset('KOR', 'TWN')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              {COUNTRIES.find((c) => c.id === 'KOR')?.flagEmoji} KOR vs {COUNTRIES.find((c) => c.id === 'TWN')?.flagEmoji} TWN
            </button>
          </div>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-3 items-center">
          {/* Country A Picker */}
          <div className="bg-slate-950/80 border border-indigo-500/40 rounded-xl p-3">
            <label htmlFor="countryASelect" className="text-xs font-semibold text-indigo-400 block mb-1">
              {t.compareBaseCountry}
            </label>
            <select
              id="countryASelect"
              value={countryAId}
              onChange={(e) => setCountryAId(e.target.value)}
              className="w-full bg-transparent text-lg font-bold text-white focus:outline-none cursor-pointer"
            >
              {COUNTRIES.map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                  {c.flagEmoji} {lang === 'ko' ? c.nameKo : c.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="mx-auto p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all transform hover:rotate-180 duration-200"
            title={t.swapCurrencies}
          >
            <ArrowRightLeft className="w-5 h-5 text-indigo-400" />
          </button>

          {/* Country B Picker */}
          <div className="bg-slate-950/80 border border-emerald-500/40 rounded-xl p-3">
            <label htmlFor="countryBSelect" className="text-xs font-semibold text-emerald-400 block mb-1">
              {t.compareTargetCountry}
            </label>
            <select
              id="countryBSelect"
              value={countryBId}
              onChange={(e) => setCountryBId(e.target.value)}
              className="w-full bg-transparent text-lg font-bold text-white focus:outline-none cursor-pointer"
            >
              {COUNTRIES.map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                  {c.flagEmoji} {lang === 'ko' ? c.nameKo : c.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Side-by-Side Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Country A Card */}
        <div className="bg-slate-900/80 border-2 border-indigo-500/30 rounded-2xl p-5 shadow-lg shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl filter drop-shadow-sm select-none" role="img" aria-label={countryA.nameEn}>
              {countryA.flagEmoji}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{nameA}</h3>
              <p className="text-xs text-slate-400">
                {lang === 'ko' ? countryA.nameEn : countryA.nameKo} • {countryA.currencyCode}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardTotalGdp} ({detailA?.latestYear ?? '2024'})</span>
              <div className="text-right">
                <span className="text-base font-bold text-indigo-400 block">
                  {detailA ? formatGdpCompact(detailA.totalGdpUsd, baseCurrency, usdToBase, lang) : '...'}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {detailA ? `$${(detailA.totalGdpUsd / 1e12).toFixed(2)}T USD` : ''}
                </span>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardPerCapita}</span>
              <div className="text-right">
                <span className="text-base font-bold text-white block">
                  {detailA ? formatPerCapita(detailA.gdpPerCapitaUsd, baseCurrency, usdToBase, lang) : '...'}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {detailA ? `$${Math.round(detailA.gdpPerCapitaUsd).toLocaleString()} USD` : ''}
                </span>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardFxRate}</span>
              <span className="text-sm font-mono font-bold text-slate-200">
                1 {countryA.currencyCode} = {formatExchangeRate(rateA, countryA.currencyCode === 'KRW' ? 4 : 2)} {baseCurrency}
              </span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardGrowthRate}</span>
              <span className="text-sm font-mono font-bold text-emerald-400">
                {detailA?.growthRatePct !== null && detailA?.growthRatePct !== undefined
                  ? `${detailA.growthRatePct > 0 ? '+' : ''}${detailA.growthRatePct.toFixed(2)}%`
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Country B Card */}
        <div className="bg-slate-900/80 border-2 border-emerald-500/30 rounded-2xl p-5 shadow-lg shadow-emerald-500/5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl filter drop-shadow-sm select-none" role="img" aria-label={countryB.nameEn}>
              {countryB.flagEmoji}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{nameB}</h3>
              <p className="text-xs text-slate-400">
                {lang === 'ko' ? countryB.nameEn : countryB.nameKo} • {countryB.currencyCode}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardTotalGdp} ({detailB?.latestYear ?? '2024'})</span>
              <div className="text-right">
                <span className="text-base font-bold text-emerald-400 block">
                  {detailB ? formatGdpCompact(detailB.totalGdpUsd, baseCurrency, usdToBase, lang) : '...'}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {detailB ? `$${(detailB.totalGdpUsd / 1e12).toFixed(2)}T USD` : ''}
                </span>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardPerCapita}</span>
              <div className="text-right">
                <span className="text-base font-bold text-white block">
                  {detailB ? formatPerCapita(detailB.gdpPerCapitaUsd, baseCurrency, usdToBase, lang) : '...'}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {detailB ? `$${Math.round(detailB.gdpPerCapitaUsd).toLocaleString()} USD` : ''}
                </span>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardFxRate}</span>
              <span className="text-sm font-mono font-bold text-slate-200">
                1 {countryB.currencyCode} = {formatExchangeRate(rateB, countryB.currencyCode === 'KRW' ? 4 : 2)} {baseCurrency}
              </span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl flex justify-between items-center">
              <span className="text-xs text-slate-400">{t.cardGrowthRate}</span>
              <span className="text-sm font-mono font-bold text-emerald-400">
                {detailB?.growthRatePct !== null && detailB?.growthRatePct !== undefined
                  ? `${detailB.growthRatePct > 0 ? '+' : ''}${detailB.growthRatePct.toFixed(2)}%`
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Insights Banner */}
      {detailA && detailB && (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
          <TrendingUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <div>
            <strong>{t.compareInsightTitle}</strong> {insightFormatted}
          </div>
        </div>
      )}

      {/* Combined 10-Year GDP Trend Line Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{t.compareChartTitle}</span>
            <span className="text-xs font-normal text-slate-400">
              ({nameA} <span className="text-indigo-400">■</span> vs {nameB}{' '}
              <span className="text-emerald-400">■</span>)
            </span>
          </h3>
          <span className="text-xs text-slate-500 font-mono">{baseCurrency}</span>
        </div>

        {loading ? (
          <div className="h-80 flex items-center justify-center text-slate-500 text-sm">
            {t.compareChartLoading}
          </div>
        ) : (
          <GdpChart
            countryName={nameA}
            dataPoints={detailA?.historical || []}
            baseCurrency={baseCurrency}
            exchangeRateToBase={usdToBase}
            comparisonPoints={detailB?.historical || []}
            comparisonCountryName={nameB}
            lang={lang}
          />
        )}
      </div>
    </div>
  )
}
