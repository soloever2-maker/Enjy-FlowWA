'use client'

// Hero — Ken Burns crossfade slideshow with brand imagery.
// Auto-cycles through hero images with a slow zoom + crossfade.
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '@/lib/lang-context'
import { STATS } from '@/lib/site-config'

/* ── Slide config ────────────────────────────────────────────── */

interface HeroSlide {
  src: string
  alt: string
  /** CSS object-position — where to anchor the crop */
  position: string
  /** CSS transform-origin — where the Ken Burns zoom pulls toward */
  zoomOrigin: string
}

const SLIDES: HeroSlide[] = [
  {
    src: '/hero-temple.jpg',
    alt: 'Yoga at ancient Egyptian temple',
    position: 'center center',
    zoomOrigin: 'center center',
  },
  {
    src: '/hero-beach.jpg',
    alt: 'Yoga on the beach',
    position: 'center 40%',
    zoomOrigin: 'center top',
  },
  {
    src: '/hero-lake.jpg',
    alt: 'Balance pose on a mountain lake dock',
    position: 'center 60%',
    zoomOrigin: 'right center',
  },
  {
    src: '/hero-waterfall.jpg',
    alt: 'Tree pose at a waterfall',
    position: 'center 35%',
    zoomOrigin: 'center top',
  },
  {
    src: '/hero-valley.jpg',
    alt: 'Warrior pose in a green valley',
    position: 'center 40%',
    zoomOrigin: 'left center',
  },
  {
    src: '/hero-mountain.jpg',
    alt: 'Meditation at mountain summit',
    position: 'center 50%',
    zoomOrigin: 'center center',
  },
  {
    src: '/hero-sunset.jpg',
    alt: 'Sunset silhouette meditation',
    position: 'center center',
    zoomOrigin: 'center center',
  },
]

const DURATION = 6000 // ms each slide stays visible
const FADE_MS = 1400  // crossfade length (CSS transition)

/* ── Component ───────────────────────────────────────────────── */

export default function Hero() {
  const { lang, t } = useLang()
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, DURATION)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Manual slide selection — resets timer
  const goTo = (i: number) => {
    setActive(i)
    startTimer()
  }

  return (
    <section id="top" className="bg-cream pt-14 md:pt-16">
      {/* ── Slideshow ───────────────────────────────────────── */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-ink/5">
        {SLIDES.map((slide, i) => {
          const isActive = i === active
          return (
            <div
              key={slide.src}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i < 2}
                sizes="100vw"
                className="object-cover"
                style={{
                  objectPosition: slide.position,
                  transformOrigin: slide.zoomOrigin,
                  animation: isActive
                    ? `heroKenBurns ${DURATION + FADE_MS}ms ease-out forwards`
                    : 'none',
                  // Reset scale when not active so re-entry starts from 1
                  transform: isActive ? undefined : 'scale(1)',
                }}
              />
            </div>
          )
        })}

        {/* Dot indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative h-2 transition-all duration-300 rounded-full"
              style={{ width: i === active ? 24 : 8 }}
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className="absolute inset-0 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i === active
                      ? 'rgba(245, 241, 230, 0.9)'
                      : 'rgba(245, 241, 230, 0.4)',
                }}
              />
              {/* Active pill progress fill */}
              {i === active && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-cream"
                  style={{
                    animation: `heroDotProgress ${DURATION}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bottom fade into cream */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 md:h-28 z-[5]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, #F5F1E6 100%)',
          }}
          aria-hidden
        />
      </div>

      {/* ── Logo + content (unchanged) ──────────────────────── */}
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
          <em
            className={`text-terracotta ${
              lang === 'en' ? 'italic' : 'not-italic'
            }`}
          >
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
