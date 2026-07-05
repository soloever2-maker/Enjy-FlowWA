'use client'

// Photography-led class cards — editorial image grid that matches
// the brand's minimalist aesthetic while showcasing real class photos.
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { supabase } from '@/lib/supabase'
import {
  FALLBACK_CLASSES,
  CLASS_META,
  CLASS_IMAGES,
  FALLBACK_CLASS_IMAGE,
  DEFAULT_CLASS_META,
} from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type ClassType = { name: string }

// Staggered aspect ratios for visual rhythm — alternating tall / wide
const CARD_STYLES = [
  'md:col-span-1 md:row-span-2 aspect-[3/4]',   // tall
  'md:col-span-1 md:row-span-1 aspect-[4/3]',   // wide
  'md:col-span-1 md:row-span-1 aspect-[4/3]',   // wide
  'md:col-span-1 md:row-span-2 aspect-[3/4]',   // tall
  'md:col-span-2 md:row-span-1 aspect-[21/9]',  // panoramic full-width
]

export default function Classes() {
  const { lang, t } = useLang()
  const [classes, setClasses] = useState<ClassType[]>(FALLBACK_CLASSES)

  useEffect(() => {
    if (!supabase) return
    supabase
      .from('class_types')
      .select('name')
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) setClasses(data)
      })
  }, [])

  return (
    <section id="classes" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('classes.label')}
            title={t('classes.title')}
            sub={t('classes.sub')}
          />
        </Reveal>

        {/* Image grid — staggered magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {classes.map((c, i) => {
            const meta = CLASS_META[c.name] ?? DEFAULT_CLASS_META
            const image = CLASS_IMAGES[c.name] ?? FALLBACK_CLASS_IMAGE
            const style = CARD_STYLES[i % CARD_STYLES.length]

            return (
              <Reveal key={c.name} delay={i * 80}>
                <a
                  href="#app"
                  className={`group relative block overflow-hidden ${style}`}
                >
                  {/* Photo */}
                  <Image
                    src={image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(43,43,38,0) 30%, rgba(43,43,38,0.12) 55%, rgba(43,43,38,0.72) 100%)',
                    }}
                    aria-hidden
                  />

                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/10 transition-colors duration-500" aria-hidden />

                  {/* Text content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex flex-col gap-2">
                    <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-cream leading-tight drop-shadow-sm">
                      {c.name}
                    </h3>
                    <p className="text-cream/80 text-sm md:text-base leading-relaxed max-w-md drop-shadow-sm">
                      {lang === 'ar' ? meta.ar : meta.en}
                    </p>
                    <span className="inline-flex items-center gap-1.5 eyebrow text-cream/70 mt-1 group-hover:text-cream transition-colors">
                      {t('classes.book')}
                      <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
