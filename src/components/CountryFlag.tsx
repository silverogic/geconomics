import React from 'react'
import * as Flags from 'country-flag-icons/react/3x2'

interface CountryFlagProps {
  iso2: string
  className?: string
  alt?: string
}

/**
 * Renders high-quality vector SVG flags for any country using ISO 3166-1 alpha-2 codes.
 * Fallbacks to FlagCDN SVG when an icon component is missing.
 */
export const CountryFlag: React.FC<CountryFlagProps> = ({
  iso2,
  className = 'w-9 h-6',
  alt,
}) => {
  const code = (iso2 || '').toUpperCase()
  const FlagComponent = (Flags as Record<string, React.ComponentType<{ className?: string; title?: string }>>)[code]

  if (FlagComponent) {
    return (
      <span className={`inline-flex items-center justify-center overflow-hidden rounded-md shadow-sm border border-slate-700/60 bg-slate-800 flex-shrink-0 ${className}`}>
        <FlagComponent className="w-full h-full object-cover" title={alt || code} />
      </span>
    )
  }

  // Fallback to high-res FlagCDN SVG
  return (
    <img
      src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
      alt={alt || code}
      className={`inline-block overflow-hidden rounded-md shadow-sm border border-slate-700/60 object-cover bg-slate-800 flex-shrink-0 ${className}`}
      loading="lazy"
    />
  )
}
