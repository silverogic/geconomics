import React, { useEffect, useRef, memo } from 'react'
import type { StockIndexMeta } from '../data/stockIndices'
import type { Language } from '../types/economics'
import { AlertCircle, LineChart, ExternalLink } from 'lucide-react'

interface TradingViewWidgetProps {
  stockIndex: StockIndexMeta | null
  lang: Language
}

export const TradingViewWidget: React.FC<TradingViewWidgetProps> = memo(({ stockIndex, lang }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stockIndex || !stockIndex.isSupported || !stockIndex.symbol) return

    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''

    const widgetContainer = document.createElement('div')
    widgetContainer.className = 'tradingview-widget-container'
    widgetContainer.style.height = '100%'
    widgetContainer.style.width = '100%'

    const widgetDiv = document.createElement('div')
    widgetDiv.className = 'tradingview-widget-container__widget'
    widgetDiv.style.height = 'calc(100% - 32px)'
    widgetDiv.style.width = '100%'
    widgetContainer.appendChild(widgetDiv)

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
    script.async = true

    const displayName = lang === 'ko' ? stockIndex.nameKo : stockIndex.nameEn
    script.innerHTML = JSON.stringify({
      symbols: [[displayName, `${stockIndex.symbol}|1D`]],
      chartOnly: false,
      width: '100%',
      height: '100%',
      locale: lang === 'ko' ? 'kr' : 'en',
      colorTheme: 'dark',
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: '10',
      noTimeScale: false,
      valuesTracking: '1',
      changeMode: 'price-and-percent',
      chartType: 'area',
      headerFontSize: 'medium',
      lineWidth: 2,
      lineType: 0,
      dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
      backgroundColor: 'rgba(15, 23, 42, 0)',
      gridLineColor: 'rgba(51, 65, 85, 0.4)',
    })

    widgetContainer.appendChild(script)
    container.appendChild(widgetContainer)

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [stockIndex, lang])

  if (!stockIndex) {
    return null
  }

  if (!stockIndex.isSupported || !stockIndex.symbol) {
    const fallbackReason =
      lang === 'ko'
        ? stockIndex.fallbackReasonKo || '해당 국가는 국제 거래소 데이터 정책으로 실시간 차트가 제한됩니다.'
        : stockIndex.fallbackReasonEn || 'Real-time exchange feed is currently restricted or unavailable for this region.'

    return (
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[260px] text-slate-400 space-y-3">
        <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
          <LineChart className="w-6 h-6 text-slate-400" />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-200">
            {lang === 'ko' ? stockIndex.nameKo : stockIndex.nameEn}
          </h4>
          <span className="text-xs font-mono text-slate-500">{stockIndex.exchange}</span>
        </div>
        <div className="flex items-center gap-2 max-w-md mx-auto text-xs text-amber-400/90 bg-amber-950/30 border border-amber-800/40 px-3.5 py-2 rounded-lg text-left">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
          <span>{fallbackReason}</span>
        </div>
      </div>
    )
  }

  const tradingViewUrl = `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(stockIndex.symbol)}`

  return (
    <div className="space-y-1.5">
      <div className="w-full h-[360px] sm:h-[400px] bg-slate-950/60 border border-slate-800 rounded-xl overflow-hidden p-2">
        <div ref={containerRef} className="w-full h-full" />
      </div>
      <div className="flex items-center justify-end px-1">
        <a
          href={tradingViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <span>{lang === 'ko' ? 'TradingView에서 공식 풀차트 보기' : 'Open full chart on TradingView'}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
})
