'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { supabase } from '@/lib/supabase'
import {
  FALLBACK_CLASSES,
  CLASS_META,
  DEFAULT_CLASS_META,
} from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type ClassType = { name: string }

// Alternating card tints from the brand palette
const TINTS = [
  'bg-sage-soft',
  'bg-[#F3E2D6]', // dusty terracotta tint
  'bg-cream-deep',
  'bg-[#E3E9EC]', // soft slate tint
  'bg-[#F0EBDD]',
]

export default function Classes() {
  const { lang, t } = useLang()
  const [classes, setClasses] = useState<ClassType[]>(FALLBACK_CLASSES)

  useEffect(() => {
    if (!supabase) return // no env vars → keep the real fallback list
    supabase
      .from('class_types')
      .select('name')
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) setClasses(data)
      })
  }, [])

  return (
    <section id="classes" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            label={t('classes.label')}
            title={t('classes.title')}
            sub={t('classes.sub')}
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((c, i) => {
            const meta = CLASS_META[c.name] ?? DEFAULT_CLASS_META
            return (
              <Reveal key={c.name} delay={i * 90}>
                <a
                  href="#app"
                  className={`group block ${TINTS[i % TINTS.length]} arch p-7 pt-12 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(43,43,38,0.12)]`}
                >
                  <span className="text-4xl block mb-5" aria-hidden>
                    {meta.emoji}
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mb-2">
                    {c.name}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-6 min-h-[2.6rem]">
                    {lang === 'ar' ? meta.ar : meta.en}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-terracotta">
                    {t('classes.book')}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[270deg]" />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
