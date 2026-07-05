'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { supabase } from '@/lib/supabase'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Review = {
  id: string
  rating: number | null
  class_type: string | null
  comment: string
  created_at: string
  first_name: string | null
}

export default function Reviews() {
  const { lang, t } = useLang()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!supabase) return setLoaded(true)
    supabase.rpc('get_approved_reviews').then(({ data }) => {
      if (data) setReviews(data as Review[])
      setLoaded(true)
    })
  }, [])

  const rated = reviews.filter((r) => r.rating != null)
  const avg =
    rated.length > 0
      ? (rated.reduce((s, r) => s + (r.rating || 0), 0) / rated.length).toFixed(1)
      : null

  // Hide the whole section only if we're sure there is nothing to show
  if (loaded && reviews.length === 0 && !supabase) return null

  return (
    <section id="reviews" className="py-24 md:py-32 bg-cream relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading
              label={t('reviews.label')}
              title={t('reviews.title')}
            />
          </Reveal>

          {avg && (
            <Reveal delay={100}>
              <div className="mb-12 md:mb-16 flex items-baseline gap-3">
                <span className="font-display font-bold text-6xl md:text-7xl text-terracotta leading-none">
                  {avg}
                </span>
                <div>
                  <div className="flex gap-0.5 mb-1" aria-hidden>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className={`w-4 h-4 ${
                          n <= Math.round(Number(avg))
                            ? 'fill-terracotta text-terracotta'
                            : 'text-ink/20'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[0.72rem] tracking-[0.15em] uppercase text-ink-muted font-semibold">
                    {t('reviews.avg')} · {rated.length} {t('reviews.count')}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {reviews.length === 0 ? (
          <Reveal>
            <p className="text-ink-muted">{t('reviews.empty')}</p>
          </Reveal>
        ) : (
          <div className="snap-rail flex gap-5 overflow-x-auto pb-4 -mx-5 px-5">
            {reviews.slice(0, 12).map((r, i) => (
              <Reveal
                key={r.id}
                delay={i * 70}
                className="shrink-0 w-[86%] sm:w-[420px]"
              >
                <figure className="bg-cream-deep rounded-[24px] p-8 h-full flex flex-col">
                  {/* Oversized serif quotation mark in terracotta */}
                  <span
                    className="font-display text-terracotta text-6xl leading-none select-none"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="font-display italic text-lg md:text-xl text-ink leading-relaxed mt-1 flex-1">
                    {r.comment}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
                    <div>
                      <p className="font-semibold text-ink text-sm">
                        {r.first_name || (lang === 'ar' ? 'عميلة Align' : 'Align member')}
                      </p>
                      {r.class_type && (
                        <p className="text-[0.72rem] text-ink-muted mt-0.5">
                          {r.class_type}
                        </p>
                      )}
                    </div>
                    {r.rating != null && (
                      <span className="flex items-center gap-1 text-terracotta text-sm font-bold">
                        {r.rating}
                        <Star className="w-3.5 h-3.5 fill-terracotta" />
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
