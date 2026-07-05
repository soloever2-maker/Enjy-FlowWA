'use client'

import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Studio photo collage — real spaces, organic frames */}
        <Reveal className="relative">
          <div className="relative">
            {/* Indoor studio — tall blob */}
            <figure className="blob w-[78%] aspect-[3/4] relative shadow-[0_24px_60px_rgba(43,43,38,0.18)]">
              <Image
                src="/studio-indoor.jpg"
                alt={t('about.caption.indoor')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 78vw, 38vw"
              />
            </figure>
            {/* Pergola — smaller arch, offset to the end/bottom */}
            <figure className="arch absolute bottom-[-8%] end-0 w-[52%] aspect-[4/3] shadow-[0_18px_45px_rgba(43,43,38,0.22)] border-4 border-cream">
              <Image
                src="/studio-pergola.jpg"
                alt={t('about.caption.outdoor')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 52vw, 26vw"
              />
            </figure>
            {/* Sage tittle-dot echo */}
            <span
              className="absolute -top-4 end-[14%] w-6 h-6 rounded-full bg-sage"
              aria-hidden
            />
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={120}>
          <SectionHeading label={t('about.label')} title={t('about.title')} />
          <div className="-mt-6 space-y-4 text-ink-muted leading-loose text-base md:text-lg">
            <p>{t('about.bio.1')}</p>
            <p>{t('about.bio.2')}</p>
          </div>
          <ul className="mt-8 space-y-3.5">
            {(['about.point.1', 'about.point.2', 'about.point.3'] as const).map(
              (k) => (
                <li key={k} className="flex items-center gap-3 text-ink font-medium">
                  <BadgeCheck className="w-5 h-5 text-sage-deep shrink-0" />
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
