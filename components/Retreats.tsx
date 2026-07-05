'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { supabase } from '@/lib/supabase'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Retreat = {
  id: string
  title: string
  description: string
  location: string
  date: string
  end_date: string | null
  price: number | null
  capacity: number | null
  cover_image: string | null
}

export default function Retreats() {
  const { lang, t } = useLang()
  const [retreats, setRetreats] = useState<Retreat[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!supabase) return setLoaded(true)
    supabase
      .from('retreats')
      .select(
        'id, title, description, location, date, end_date, price, capacity, cover_image'
      )
      .eq('status', 'published')
      .gte('date', new Date().toISOString())
      .order('date', { ascending: true })
      .then(({ data }) => {
        if (data) setRetreats(data)
        setLoaded(true)
      })
  }, [])

  const fmtDate = (start: string, end: string | null) => {
    const locale = lang === 'ar' ? 'ar-EG' : 'en-GB'
    const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }
    const s = new Date(start).toLocaleDateString(locale, opts)
    if (!end) return s
    const e = new Date(end).toLocaleDateString(locale, { ...opts, year: 'numeric' })
    return `${s} – ${e}`
  }

  return (
    <section id="retreats" className="bg-cream">
      {/* Full-bleed section opener — straight edges, quiet type */}
      <div className="relative h-[68vh] min-h-[420px]">
        <Image
          src="/retreat-aswan.jpg"
          alt=""
          fill
          className="object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/35" aria-hidden />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Reveal>
              <p className="eyebrow text-cream/75 mb-5">{t('retreats.label')}</p>
              <h2 className="font-display text-cream font-bold text-4xl md:text-6xl leading-[1.08] max-w-2xl">
                {t('retreats.title')}
              </h2>
              <p className="mt-5 text-cream/80 max-w-xl text-base md:text-lg">
                {t('retreats.sub')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {loaded && retreats.length === 0 && (
          // Quiet empty state — one hairline row, no fake data
          <Reveal>
            <p className="border-t border-b hairline py-10 text-center text-ink-muted eyebrow">
              {t('retreats.empty')}
            </p>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {retreats.map((r, i) => (
            <Reveal key={r.id} delay={i * 90}>
              <article className="group">
                <a href="#app" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <Image
                      src={r.cover_image || '/retreat-aswan.jpg'}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="eyebrow text-terracotta mb-3">
                    {r.location} · {fmtDate(r.date, r.end_date)}
                  </p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-3 transition-colors group-hover:text-terracotta">
                    {r.title}
                  </h3>
                  {r.description && (
                    <p className="text-sm md:text-base text-ink-muted leading-relaxed line-clamp-2 mb-4">
                      {r.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between border-t hairline pt-4">
                    {r.price != null ? (
                      <span className="font-display font-bold text-lg text-ink">
                        {r.price.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}{' '}
                        <span className="text-xs font-body font-medium text-ink-muted">
                          {t('retreats.egp')}
                        </span>
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="eyebrow text-ink-muted group-hover:text-terracotta transition-colors">
                      {t('retreats.details')}
                    </span>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
