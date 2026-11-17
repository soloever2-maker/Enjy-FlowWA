'use client'

import BrandIcon from './BrandIcon'

// Minimal section heading: hairline rule + thin uppercase label,
// then a large serif title. No decorations.
export default function SectionHeading({
  label,
  title,
  sub,
  light = false,
}: {
  label: string
  title: string
  sub?: string
  light?: boolean
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div
        className={`flex items-center gap-5 mb-6 ${
          light ? 'text-cream/60' : 'text-ink-muted'
        }`}
      >
        <span className="eyebrow">{label}</span>
        <span className={light ? 'text-cream/40' : 'text-sage'}>
          <BrandIcon name="dots" mode="mask" className="w-14 h-2.5" />
        </span>
      </div>
      <h2
        className={`font-display text-4xl md:text-6xl leading-[1.08] font-bold max-w-3xl ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-base md:text-lg max-w-xl leading-relaxed ${
            light ? 'text-cream/65' : 'text-ink-muted'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
