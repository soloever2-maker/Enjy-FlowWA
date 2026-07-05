'use client'

// Weekly schedule preview — clean editorial table.
// Shows condensed class times; full schedule + booking lives in the app.
import { ArrowUpRight, Clock } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { SCHEDULE_PREVIEW, CLASS_META, DEFAULT_CLASS_META, APP_WEB_URL } from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function SchedulePreview() {
  const { lang, t } = useLang()

  return (
    <section id="schedule" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('schedule.label')}
            title={t('schedule.title')}
            sub={t('schedule.sub')}
          />
        </Reveal>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 border-t hairline">
          {SCHEDULE_PREVIEW.map((day, di) => (
            <Reveal key={day.day.en} delay={di * 60}>
              <div className="py-7 border-b hairline">
                {/* Day name */}
                <h3 className="font-display font-bold text-lg md:text-xl text-ink mb-4">
                  {lang === 'ar' ? day.day.ar : day.day.en}
                </h3>

                {/* Classes */}
                <div className="space-y-3">
                  {day.classes.map((cls, ci) => {
                    const meta = CLASS_META[cls.name] ?? DEFAULT_CLASS_META
                    return (
                      <div
                        key={ci}
                        className="flex items-start gap-3 group/cls"
                      >
                        {/* Time */}
                        <span className="flex items-center gap-1.5 text-ink-muted text-xs font-medium tabular-nums min-w-[72px] pt-0.5">
                          <Clock className="w-3 h-3" />
                          {cls.time}
                        </span>

                        {/* Class info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-ink font-medium text-sm">
                            {cls.name}
                          </p>
                          <p className="text-ink-muted text-xs leading-relaxed mt-0.5 truncate">
                            {lang === 'ar' ? meta.ar : meta.en}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="mt-12 flex justify-center">
            <a
              href={`${APP_WEB_URL}/schedule`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 eyebrow text-terracotta border-b border-terracotta/40 pb-2 hover:border-terracotta transition-colors"
            >
              {t('schedule.cta')}
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
