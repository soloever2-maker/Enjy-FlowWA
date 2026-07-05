'use client'

import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { STATS } from '@/lib/site-config'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end">
      {/* Full-bleed brand photo */}
      <Image
        src="/retreat-aswan.jpg"
        alt={t('hero.photo.caption')}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Quiet single-direction scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,20,18,0.34) 0%, rgba(20,20,18,0.06) 34%, rgba(20,20,18,0.55) 76%, rgba(20,20,18,0.78) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-44">
        <p className="eyebrow text-cream/75 mb-6">{t('hero.eyebrow')}</p>

        <h1 className="font-display text-cream font-bold leading-[1.05] text-[clamp(2.8rem,7.5vw,6rem)] max-w-4xl">
          {t('hero.title.1')}{' '}
          <em className={lang === 'en' ? 'italic' : 'not-italic'}>
            {t('hero.title.2')}
          </em>{' '}
          {t('hero.title.3')}
        </h1>

        <p className="mt-6 text-cream/80 text-base md:text-xl max-w-xl leading-relaxed">
          {t('hero.sub')}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#app"
            className="eyebrow bg-cream text-ink px-9 py-4 hover:bg-terracotta hover:text-cream transition-colors"
          >
            {t('hero.cta.primary')}
          </a>
          <a
            href="#classes"
            className="eyebrow text-cream border-b border-cream/50 pb-1.5 hover:border-cream transition-colors"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Inline stats on a hairline */}
        <div className="mt-14 flex flex-wrap items-end gap-x-12 gap-y-5 border-t border-cream/20 pt-8">
          {STATS.map((s) => (
            <div key={s.en} className="flex items-baseline gap-3">
              <span className="font-display font-bold text-3xl md:text-4xl text-cream">
                {s.value}
              </span>
              <span className="eyebrow text-cream/55">
                {lang === 'ar' ? s.ar : s.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
