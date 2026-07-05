'use client'

// Hero — contained image + transparent logo below.
// Glo-style: image does NOT fill the screen, no text on image.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { STATS } from '@/lib/site-config'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="top" className="bg-cream pt-14 md:pt-16">
      {/* Hero image — contained, not full-bleed */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="/hero-temple.jpg"
          alt={t('hero.photo.caption')}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Bottom fade into cream */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 md:h-28"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #F5F1E6 100%)',
          }}
          aria-hidden
        />
      </div>

      {/* Logo + content */}
      <div className="max-w-4xl mx-auto px-6 text-center -mt-6 md:-mt-10 relative z-10">
        {/* Transparent logo */}
        <div className="flex justify-center mb-8 md:mb-10">
          <Image
            src="/logo-transparent.png"
            alt="Align with Enjy"
            width={180}
            height={120}
            className="w-32 md:w-44 h-auto"
          />
        </div>

        {/* Eyebrow */}
        <p className="eyebrow text-ink-muted mb-4 md:mb-5">
          {t('hero.eyebrow')}
        </p>

        {/* Main heading */}
        <h1 className="font-display text-ink font-bold leading-[1.08] text-3xl md:text-5xl lg:text-6xl">
          {t('hero.title.1')}{' '}
          <em className={`text-terracotta ${lang === 'en' ? 'italic' : 'not-italic'}`}>
            {t('hero.title.2')}
          </em>{' '}
          {t('hero.title.3')}
        </h1>

        {/* Sub text */}
        <p className="mt-4 md:mt-6 text-ink-muted text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
          {t('hero.sub')}
        </p>

        {/* CTAs */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#app"
            className="eyebrow bg-ink text-cream px-9 py-4 hover:bg-terracotta transition-colors w-full sm:w-auto text-center"
          >
            {t('hero.cta.primary')}
          </a>
          <a
            href="#classes"
            className="eyebrow text-ink border-b border-ink/30 pb-1.5 hover:text-terracotta hover:border-terracotta transition-colors"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-end justify-center gap-x-10 md:gap-x-14 gap-y-4 border-t hairline pt-8 pb-6">
          {STATS.map((s) => (
            <div key={s.en} className="flex items-baseline gap-2 md:gap-3">
              <span className="font-display font-bold text-2xl md:text-4xl text-ink">
                {s.value}
              </span>
              <span className="eyebrow text-ink-muted text-[0.6rem] md:text-[0.72rem]">
                {lang === 'ar' ? s.ar : s.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
