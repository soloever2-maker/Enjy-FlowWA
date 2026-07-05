'use client'

// Editorial index: full-width rows with hairline dividers.
// Premium fashion-catalog treatment — no cards, no emojis.
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
    <section id="classes" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('classes.label')}
            title={t('classes.title')}
            sub={t('classes.sub')}
          />
        </Reveal>

        <div className="border-t hairline">
          {classes.map((c, i) => {
            const meta = CLASS_META[c.name] ?? DEFAULT_CLASS_META
            return (
              <Reveal key={c.name} delay={i * 60}>
                <a
                  href="#app"
                  className="group grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr),auto] items-center gap-3 md:gap-10 py-8 md:py-10 border-b hairline transition-colors hover:bg-cream-deep/60 md:px-4 md:-mx-4"
                >
                  <h3 className="font-display font-bold text-2xl md:text-4xl text-ink transition-colors group-hover:text-terracotta">
                    {c.name}
                  </h3>
                  <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                    {lang === 'ar' ? meta.ar : meta.en}
                  </p>
                  <span className="hidden md:inline-flex items-center gap-2 eyebrow text-ink-muted transition-colors group-hover:text-terracotta">
                    {t('classes.book')}
                    <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
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
