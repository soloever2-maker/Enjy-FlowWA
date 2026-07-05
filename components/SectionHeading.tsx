'use client'

// Shared section heading: small letter-spaced label with the brand's
// sage dot (the logo's signature tittle), then a large serif title.
export default function SectionHeading({
  label,
  title,
  sub,
  light = false,
  center = false,
}: {
  label: string
  title: string
  sub?: string
  light?: boolean
  center?: boolean
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <div
        className={`inline-flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[0.28em] uppercase mb-4 ${
          light ? 'text-sage' : 'text-terracotta'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-sage inline-block" aria-hidden />
        {label}
      </div>
      <h2
        className={`font-display text-4xl md:text-5xl leading-[1.15] font-bold ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base md:text-lg max-w-xl leading-relaxed ${
            light ? 'text-cream/70' : 'text-ink-muted'
          } ${center ? 'mx-auto' : ''}`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
