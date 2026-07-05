'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MapPin, CalendarDays, Sparkles } from 'lucide-react'
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
    const e = new Date(end).toLocaleDateString(locale, {
      ...opts,
      year: 'numeric',
    })
    return `${s} – ${e}`
  }

  return (
    <section id="retreats" className="py-24 md:py-32 bg-cream-deep relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            label={t('retreats.label')}
            title={t('retreats.title')}
            sub={t('retreats.sub')}
          />
        </Reveal>

        {loaded && retreats.length === 0 && (
          // Graceful empty state — uses the real Aswan photo, never fake data
          <Reveal>
            <div className="relative arch overflow-hidden">
              <Image
                src="/retreat-aswan.jpg"
                alt=""
                width={1066}
                height={1066}
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 text-cream">
                <Sparkles className="w-6 h-6 text-sage mb-3" aria-hidden />
                <p className="font-display font-bold text-2xl md:text-3xl max-w-lg leading-snug">
                  {t('retreats.empty')}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        <div className="space-y-8">
          {retreats.map((r, i) => (
            <Reveal key={r.id} delay={i * 100}>
              <article
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 bg-cream rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(43,43,38,0.08)]`}
              >
                {/* Photo side — alternates start/end per card */}
                <div
                  className={`relative min-h-[260px] md:min-h-[340px] ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={r.cover_image || '/retreat-aswan.jpg'}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text side */}
                <div className="p-8 md:p-11 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">
                    {r.title}
                  </h3>
                  <div className="space-y-2.5 mb-5">
                    <p className="flex items-center gap-2.5 text-sm text-ink-muted">
                      <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                      {r.location}
                    </p>
                    <p className="flex items-center gap-2.5 text-sm text-ink-muted">
                      <CalendarDays className="w-4 h-4 text-terracotta shrink-0" />
                      {fmtDate(r.date, r.end_date)}
                    </p>
                  </div>
                  {r.description && (
                    <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-6 line-clamp-3">
                      {r.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between gap-4 border-t border-ink/8 pt-5">
                    {r.price != null ? (
                      <span className="font-display font-bold text-xl text-terracotta">
                        {r.price.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}{' '}
                        <span className="text-sm font-body font-medium text-ink-muted">
                          {t('retreats.egp')}
                        </span>
                      </span>
                    ) : (
                      <span />
                    )}
                    <a
                      href="#app"
                      className="text-[0.85rem] font-semibold text-terracotta underline underline-offset-4 decoration-sage hover:decoration-terracotta transition-colors"
                    >
                      {t('retreats.details')}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
