import { useState, useEffect, useMemo, useCallback } from 'react'
import { Search, Filter, Sparkles, AlertCircle } from 'lucide-react'
import { COUNTRIES } from './data/countries'
import type { CountryMeta, BaseCurrency, ExchangeRates, Region, Language } from './types/economics'
import { fetchExchangeRates, getConversionRate } from './services/exchangeApi'
import { loadGlobalGdpOverview } from './services/worldBankApi'
import { formatGdpCompact } from './utils/formatters'
import { translations } from './i18n/translations'
import { Navbar } from './components/Navbar'
import { TickerBar } from './components/TickerBar'
import { CountryCard } from './components/CountryCard'
import { CountryModal } from './components/CountryModal'
import { CompareView } from './components/CompareView'
import { RankingTable, type CountryRowItem } from './components/RankingTable'
import { Footer } from './components/Footer'
import { CountryFlag } from './components/CountryFlag'
import {
  detectBrowserLanguage,
  detectBrowserBaseCurrency,
  saveLanguagePreference,
  saveBaseCurrencyPreference,
} from './utils/locale'

export function App() {
  // Localization: Auto-detected from browser locale or restored from localStorage
  const [lang, setLangState] = useState<Language>(() => detectBrowserLanguage())

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    saveLanguagePreference(newLang)
  }

  // Base currency: Auto-detected based on regional hints or restored from localStorage
  const [baseCurrency, setBaseCurrencyState] = useState<BaseCurrency>(() => detectBrowserBaseCurrency())

  const setBaseCurrency = (newCurrency: BaseCurrency) => {
    setBaseCurrencyState(newCurrency)
    saveBaseCurrencyPreference(newCurrency)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]
  const [activeTab, setActiveTab] = useState<'cards' | 'ranking' | 'compare'>('cards')

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All')

  // Selected country for deep-dive modal
  const [selectedCountry, setSelectedCountry] = useState<CountryMeta | null>(null)

  // Remote data state
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null)
  const [gdpMap, setGdpMap] = useState<Map<string, { totalGdp: number; year: number }>>(new Map())
  const [perCapitaMap, setPerCapitaMap] = useState<Map<string, { perCapita: number; year: number }>>(new Map())
  const [growthMap, setGrowthMap] = useState<Map<string, { growth: number; year: number }>>(new Map())

  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date())

  // Initial and refresh data fetcher
  const loadData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setIsRefreshing(true)
    else setIsLoading(true)
    setErrorMsg(null)

    try {
      const [fx, gdpData] = await Promise.all([
        fetchExchangeRates(isRefresh),
        loadGlobalGdpOverview(isRefresh),
      ])

      setExchangeRates(fx)
      setGdpMap(new Map(gdpData.gdpMap))
      setPerCapitaMap(new Map(gdpData.perCapitaMap))
      setGrowthMap(new Map(gdpData.growthMap))
      setLastRefreshed(new Date())
    } catch (err: any) {
      console.error('Error synchronizing economic data:', err)
      setErrorMsg(
        lang === 'ko'
          ? '데이터를 동기화하는 중 네트워크 지연이 발생했습니다. 다시 시도해 주세요.'
          : 'A network timeout occurred while synchronizing data. Please try again.'
      )
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }, [lang])

  useEffect(() => {
    loadData(false)
  }, [loadData])

  // Build ranked country metrics list
  const allRankedItems: CountryRowItem[] = useMemo(() => {
    const list = COUNTRIES.map((country) => {
      const gdpObj = gdpMap.get(country.id)
      const pcapObj = perCapitaMap.get(country.id)
      const growthObj = growthMap.get(country.id)

      return {
        country,
        rank: 0,
        totalGdpUsd: gdpObj?.totalGdp || 0,
        gdpPerCapitaUsd: pcapObj?.perCapita || 0,
        growthRatePct: growthObj?.growth ?? null,
      }
    })

    list.sort((a, b) => b.totalGdpUsd - a.totalGdpUsd)
    list.forEach((item, index) => {
      item.rank = index + 1
    })

    return list
  }, [gdpMap, perCapitaMap, growthMap])

  // Filtered countries for Card Grid
  const filteredRankedItems = useMemo(() => {
    return allRankedItems.filter((item) => {
      const q = searchQuery.toLowerCase().trim()
      const matchQuery =
        !q ||
        item.country.nameEn.toLowerCase().includes(q) ||
        item.country.nameKo.toLowerCase().includes(q) ||
        item.country.id.toLowerCase().includes(q) ||
        item.country.currencyCode.toLowerCase().includes(q)

      const matchRegion = selectedRegion === 'All' || item.country.region === selectedRegion

      return matchQuery && matchRegion
    })
  }, [allRankedItems, searchQuery, selectedRegion])

  // Selected country rank for modal
  const selectedRank = useMemo(() => {
    if (!selectedCountry) return 1
    const found = allRankedItems.find((i) => i.country.id === selectedCountry.id)
    return found ? found.rank : 1
  }, [allRankedItems, selectedCountry])

  const usdToBase = exchangeRates ? getConversionRate(exchangeRates, 'USD', baseCurrency) : 1

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        lang={lang}
        setLang={setLang}
        onRefresh={() => loadData(true)}
        isRefreshing={isRefreshing}
        lastUpdatedText={lastRefreshed.toLocaleTimeString(lang === 'ko' ? 'ko-KR' : 'en-US')}
      />

      {/* Real-time FX Ticker */}
      <TickerBar exchangeRates={exchangeRates} baseCurrency={baseCurrency} lang={lang} />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* Network Error Notification */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
            <div className="flex-1">{errorMsg}</div>
            <button
              onClick={() => loadData(true)}
              className="px-3 py-1 bg-rose-800 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold"
            >
              {lang === 'ko' ? '다시 시도' : 'Retry'}
            </button>
          </div>
        )}

        {/* TAB 1: CARDS EXPLORER */}
        {activeTab === 'cards' && (
          <div className="space-y-6">
            {/* Hero / Overview Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.heroBadge}</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {t.heroTitle}
                </h1>
                <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
                  {t.heroDescription}
                </p>
              </div>

              {/* Statistical Highlights (No Emojis) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-800/80">
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400 font-medium">{t.statCountriesTracked}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-0.5">
                    {COUNTRIES.length}
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400 font-medium">{t.statBaseCurrency}</div>
                  <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono mt-0.5">
                    {baseCurrency}
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400 font-medium">{t.statTopEconomy}</div>
                  <div className="text-base sm:text-lg font-bold text-slate-200 mt-1 truncate flex items-center">
                    <CountryFlag iso2="US" className="w-5 h-3.5 mr-1.5" />
                    <span>United States ({allRankedItems[0]?.totalGdpUsd ? formatGdpCompact(allRankedItems[0].totalGdpUsd, baseCurrency, usdToBase, lang) : '...'})</span>
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400 font-medium">{t.statSouthKorea}</div>
                  <div className="text-base sm:text-lg font-bold text-slate-200 mt-1 truncate flex items-center">
                    <CountryFlag iso2="KR" className="w-5 h-3.5 mr-1.5" />
                    <span>South Korea (#{allRankedItems.find((i) => i.country.id === 'KOR')?.rank || 14})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-2xl">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Region Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs font-semibold">
                <Filter className="w-3.5 h-3.5 text-slate-500 mr-1 hidden sm:inline" />
                {(['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1.5 rounded-xl transition-colors whitespace-nowrap ${
                      selectedRegion === reg
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                        : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    {reg === 'All'
                      ? t.filterAll
                      : reg === 'Asia'
                      ? t.filterAsia
                      : reg === 'Europe'
                      ? t.filterEurope
                      : reg === 'Americas'
                      ? t.filterAmericas
                      : reg === 'Africa'
                      ? t.filterAfrica
                      : t.filterOceania}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Cards Grid */}
            {isLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-400">
                <div className="w-8 h-8 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-medium">{t.loadingData}</p>
              </div>
            ) : filteredRankedItems.length === 0 ? (
              <div className="py-16 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
                {t.noCountriesFound}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredRankedItems.map((item) => (
                  <CountryCard
                    key={item.country.id}
                    country={item.country}
                    rank={item.rank}
                    totalGdpUsd={item.totalGdpUsd}
                    gdpPerCapitaUsd={item.gdpPerCapitaUsd}
                    growthRatePct={item.growthRatePct}
                    baseCurrency={baseCurrency}
                    exchangeRates={exchangeRates}
                    lang={lang}
                    onSelect={(c) => setSelectedCountry(c)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RANKING TABLE */}
        {activeTab === 'ranking' && (
          <RankingTable
            items={allRankedItems}
            baseCurrency={baseCurrency}
            exchangeRates={exchangeRates}
            lang={lang}
            onSelectCountry={(c) => setSelectedCountry(c)}
          />
        )}

        {/* TAB 3: 1:1 COMPARE */}
        {activeTab === 'compare' && (
          <CompareView
            baseCurrency={baseCurrency}
            exchangeRates={exchangeRates}
            lang={lang}
          />
        )}
      </main>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          rank={selectedRank}
          baseCurrency={baseCurrency}
          exchangeRates={exchangeRates}
          lang={lang}
          onClose={() => setSelectedCountry(null)}
        />
      )}

      {/* Global Footer */}
      <Footer lang={lang} />
    </div>
  )
}

export default App
