'use client'

// The studio spaces — an editorial two-panel gallery.
// Each photo keeps its natural orientation (portrait hall, landscape
// pergola) and both panels share one height on desktop.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const SPACES = [
  {
    src: '/studio-indoor.jpg',
    captionKey: 'about.caption.indoor',
    // portrait photo → narrow panel
    col: 'md:col-span-5 lg:col-span-4',
    mobileAspect: 'aspect-[3/4]',
    sizes: '(max-width: 768px) 100vw, 34vw',
  },
  {
    src: '/studio-pergola.jpg',
    captionKey: 'about.caption.outdoor',
    // landscape photo → wide panel
    col: 'md:col-span-7 lg:col-span-8',
    mobileAspect: 'aspect-[4/3]',
    sizes: '(max-width: 768px) 100vw, 66vw',
  },
] as const

export default function Studio() {
  const { t } = useLang()

  return (
    <section id="studio" className="py-28 md:py-36 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('studio.label')}
            title={t('studio.title')}
            sub={t('studio.sub')}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {SPACES.map((space, i) => (
            <Reveal key={space.src} delay={i * 120} className={space.col}>
              <figure
                className={`group relative overflow-hidden bg-ink/5 ${space.mobileAspect} md:aspect-auto md:h-[540px] lg:h-[600px]`}
              >
                <Image
                  src={space.src}
                  alt={t(space.captionKey)}
                  fill
                  quality={90}
                  sizes={space.sizes}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Soft shade so the caption stays readable */}
                <div
                  className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6 md:p-7 text-cream">
                  <span className="font-display text-xl md:text-2xl font-bold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-8 bg-cream/50" aria-hidden />
                  <span className="eyebrow">{t(space.captionKey)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
