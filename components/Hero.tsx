'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { STATS } from '@/lib/site-config'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end">
      {/* Full-bleed brand photo — the Aswan retreat at golden hour */}
      <Image
        src="/retreat-aswan.jpg"
        alt={t('hero.photo.caption')}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Warm scrim: cream at the very top (navbar legibility) into deep ink at the base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(245,241,230,0.28) 0%, rgba(43,43,38,0.05) 30%, rgba(43,43,38,0.62) 78%, rgba(43,43,38,0.82) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-14 pt-40">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-cream/15 backdrop-blur-md border border-cream/25 text-cream text-[0.78rem] font-semibold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-sage" aria-hidden />
          {t('hero.eyebrow')}
        </div>

        {/* Headline — the middle word carries the terracotta + sage tittle */}
        <h1 className="font-display text-cream font-bold leading-[1.08] text-[clamp(2.6rem,7vw,5.2rem)] max-w-3xl">
          {t('hero.title.1')}{' '}
          <em className={`not-italic text-[#E5A181] ${lang === 'en' ? 'italic' : ''} tittle`}>
            {t('hero.title.2')}
          </em>{' '}
          {t('hero.title.3')}
        </h1>

        <p className="mt-5 text-cream/85 text-base md:text-xl max-w-xl leading-relaxed">
          {t('hero.sub')}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#app"
            className="group inline-flex items-center gap-2.5 bg-terracotta hover:bg-terracotta-deep text-cream font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            {t('hero.cta.primary')}
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#classes"
            className="inline-flex items-center gap-2 text-cream font-medium underline underline-offset-8 decoration-sage decoration-2 hover:decoration-cream transition-colors"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Editorial inline stats — serif numbers on a shared baseline */}
        <div className="mt-12 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-cream/20 pt-7">
          {STATS.map((s) => (
            <div key={s.en} className="flex items-baseline gap-2.5">
              <span className="font-display font-bold text-3xl md:text-4xl text-cream">
                {s.value}
              </span>
              <span className="text-[0.72rem] tracking-[0.18em] uppercase text-cream/65 font-semibold">
                {lang === 'ar' ? s.ar : s.en}
              </span>
            </div>
          ))}
        </div>

        {/* Photo caption */}
        <p className="mt-6 text-[0.72rem] tracking-[0.15em] uppercase text-cream/45">
          {t('hero.photo.caption')}
        </p>
      </div>
    </section>
  )
}
