'use client'

import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { STATS } from '@/lib/site-config'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="top" className="relative min-h-[85svh] md:min-h-[100svh] flex items-end">
      {/* Full-bleed brand photo — focused lower on mobile so subjects stay visible */}
      <Image
        src="/retreat-aswan.jpg"
        alt={t('hero.photo.caption')}
        fill
        priority
        className="object-cover object-[center_65%] md:object-center"
        sizes="100vw"
      />

      {/* Stronger scrim on mobile for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,20,18,0.45) 0%, rgba(20,20,18,0.15) 30%, rgba(20,20,18,0.55) 60%, rgba(20,20,18,0.85) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 pb-10 md:pb-16 pt-32 md:pt-44">
        <p className="eyebrow text-cream/75 mb-4 md:mb-6 text-[0.65rem] md:text-[0.72rem]">
          {t('hero.eyebrow')}
        </p>

        <h1 className="font-display text-cream font-bold leading-[1.08] text-[clamp(2rem,8vw,6rem)] md:text-[clamp(2.8rem,7.5vw,6rem)] max-w-4xl">
          {t('hero.title.1')}{' '}
          <em className={lang === 'en' ? 'italic' : 'not-italic'}>
            {t('hero.title.2')}
          </em>{' '}
          {t('hero.title.3')}
        </h1>

        <p className="mt-4 md:mt-6 text-cream/85 text-sm md:text-xl max-w-xl leading-relaxed">
          {t('hero.sub')}
        </p>

        {/* CTAs — stacked on small mobile, inline on wider screens */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <a
            href="#app"
            className="eyebrow bg-cream text-ink px-8 py-3.5 md:px-9 md:py-4 hover:bg-terracotta hover:text-cream transition-colors text-center w-full sm:w-auto"
          >
            {t('hero.cta.primary')}
          </a>
          <a
            href="#classes"
            className="eyebrow text-cream border-b border-cream/50 pb-1.5 hover:border-cream transition-colors text-center w-full sm:w-auto"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Inline stats — compact on mobile */}
        <div className="mt-8 md:mt-14 flex flex-wrap items-end gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-5 border-t border-cream/20 pt-6 md:pt-8">
          {STATS.map((s) => (
            <div key={s.en} className="flex items-baseline gap-2 md:gap-3">
              <span className="font-display font-bold text-2xl md:text-4xl text-cream">
                {s.value}
              </span>
              <span className="eyebrow text-cream/55 text-[0.6rem] md:text-[0.72rem]">
                {lang === 'ar' ? s.ar : s.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
