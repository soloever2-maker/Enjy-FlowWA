'use client'

// About Enjy — the person, not the rooms. Portrait slot reads from
// ENJY_PHOTO in site-config; until a photo is provided, a clean
// typographic block holds the space.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { ENJY_PHOTO } from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import BrandIcon from './BrandIcon'
import FloatingBotanicals from './FloatingBotanicals'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-24 bg-cream">
      <FloatingBotanicals />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Portrait */}
        <Reveal className="relative">
          {/* Balance circle — Soft Sage disc behind the arch portrait */}
          <div
            className="absolute z-0 rounded-full bg-sage/60 w-[70%] aspect-square -bottom-8 -end-8 md:-end-12"
            aria-hidden
          />
          {ENJY_PHOTO ? (
            <div className="relative z-10 aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-arch">
              <Image
                src={ENJY_PHOTO}
                alt="Enjy Gebril"
                fill
                className="object-cover object-[center_45%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="relative z-10 aspect-[4/5] rounded-arch bg-sage-deep flex items-center justify-center p-10">
              <p className="font-display font-bold text-cream lowercase text-4xl md:text-5xl leading-tight text-center">
                align
                <br />
                with
                <br />
                enjy
              </p>
            </div>
          )}
        </Reveal>

        {/* Bio */}
        <Reveal delay={120}>
          <SectionHeading label={t('about.label')} title={t('about.title')} />
          <div className="-mt-2 space-y-5 text-ink-muted leading-loose text-base md:text-lg">
            <p>{t('about.bio.1')}</p>
            <p>{t('about.bio.2')}</p>
          </div>
          <ul className="mt-10 border-t hairline">
            {(
              [
                ['about.point.1', 'instructor'],
                ['about.point.2', 'women-community'],
                ['about.point.3', 'retreats'],
              ] as const
            ).map(([k, icon]) => (
              <li
                key={k}
                className="flex items-center gap-4 py-4 border-b hairline text-ink font-medium text-sm md:text-base"
              >
                <BrandIcon name={icon} className="w-8 h-8" />
                {t(k)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
