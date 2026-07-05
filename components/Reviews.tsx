'use client'

// Renders ONLY when approved reviews exist — never an empty shell.
import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { supabase } from '@/lib/supabase'
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

  useEffect(() => {
    if (!supabase) return
    supabase.rpc('get_approved_reviews').then(({ data }) => {
      if (data) setReviews(data as Review[])
    })
  }, [])

  if (reviews.length === 0) return null

  const rated = reviews.filter((r) => r.rating != null)
  const avg =
    rated.length > 0
      ? (rated.reduce((s, r) => s + (r.rating || 0), 0) / rated.length).toFixed(1)
      : null

  return (
    <section id="reviews" className="py-28 md:py-36 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-5 mb-6 text-ink-muted">
            <span className="eyebrow">{t('reviews.label')}</span>
            <span className="h-px flex-1 bg-ink/10" aria-hidden />
            {avg && (
              <span className="flex items-center gap-2 eyebrow text-ink">
                <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                {avg} · {rated.length} {t('reviews.count')}
              </span>
            )}
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.08] font-bold text-ink mb-14 md:mb-20">
            {t('reviews.title')}
          </h2>
        </Reveal>

        <div className="snap-rail flex gap-px overflow-x-auto -mx-6 px-6 bg-transparent">
          {reviews.slice(0, 12).map((r, i) => (
            <Reveal
              key={r.id}
              delay={i * 60}
              className="shrink-0 w-[86%] sm:w-[440px]"
            >
              <figure className="bg-cream p-9 md:p-11 h-full flex flex-col me-5">
                <blockquote className="font-display italic text-xl md:text-2xl text-ink leading-relaxed flex-1">
                  &ldquo;{r.comment}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between gap-3 border-t hairline pt-5">
                  <div>
                    <p className="font-semibold text-ink text-sm">
                      {r.first_name || (lang === 'ar' ? 'عميلة Align' : 'Align member')}
                    </p>
                    {r.class_type && (
                      <p className="eyebrow text-ink-muted mt-1.5">{r.class_type}</p>
                    )}
                  </div>
                  {r.rating != null && (
                    <span className="flex items-center gap-1.5 text-ink text-sm font-bold">
                      {r.rating}
                      <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
