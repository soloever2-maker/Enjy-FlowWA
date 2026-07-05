'use client'

// The studio spaces — the real photos belong here, not in About Enjy.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Studio() {
  const { t } = useLang()

  return (
    <section className="py-28 md:py-36 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('studio.label')}
            title={t('studio.title')}
            sub={t('studio.sub')}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/studio-indoor.jpg"
                  alt={t('about.caption.indoor')}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="eyebrow text-ink-muted mt-4">
                {t('about.caption.indoor')}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="md:mt-20">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/studio-pergola.jpg"
                  alt={t('about.caption.outdoor')}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="eyebrow text-ink-muted mt-4">
                {t('about.caption.outdoor')}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
