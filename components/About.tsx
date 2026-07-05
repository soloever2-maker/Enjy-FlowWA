'use client'

// About Enjy — the person, not the rooms. Portrait slot reads from
// ENJY_PHOTO in site-config; until a photo is provided, a clean
// typographic block holds the space.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { ENJY_PHOTO } from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Portrait */}
        <Reveal>
          {ENJY_PHOTO ? (
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={ENJY_PHOTO}
                alt="Enjy Gebril"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="aspect-[4/5] bg-sage-deep flex items-center justify-center p-10">
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
          <div className="-mt-8 space-y-5 text-ink-muted leading-loose text-base md:text-lg">
            <p>{t('about.bio.1')}</p>
            <p>{t('about.bio.2')}</p>
          </div>
          <ul className="mt-10 border-t hairline">
            {(['about.point.1', 'about.point.2', 'about.point.3'] as const).map(
              (k) => (
                <li
                  key={k}
                  className="py-4 border-b hairline text-ink font-medium text-sm md:text-base"
                >
                  {t(k)}
                </li>
              )
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
