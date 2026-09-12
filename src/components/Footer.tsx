import React from 'react'
import { Shield, ExternalLink, Globe } from 'lucide-react'
import type { Language } from '../types/economics'
import { translations } from '../i18n/translations'

interface FooterProps {
  lang: Language
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang]

  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-base">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span>GlobalEcon</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a
              href="https://data.worldbank.org/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
            >
              <span>{t.footerWorldBank}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
            >
              <span>{t.footerEcb}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
            >
              <span>{t.footerGithub}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-start gap-3">
          <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-slate-400 leading-relaxed">
            <p>
              <strong>{t.footerZeroStorageTitle}:</strong> {t.footerZeroStorageDesc}
            </p>
            <p className="text-[11px] text-slate-500">
              * {t.footerDisclaimer}
            </p>
          </div>
        </div>

        <div className="text-center text-slate-600 text-[11px]">
          (C) {new Date().getFullYear()} GlobalEcon. Powered by World Bank Open API & Open Exchange Rates. Hosted on GitHub Pages.
        </div>
      </div>
    </footer>
  )
}
