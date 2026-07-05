'use client'

import Image from 'next/image'
import {
  CalendarCheck,
  Package,
  BellRing,
  QrCode,
  ExternalLink,
  Apple,
  Play,
} from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { APP_STORE_URL, PLAY_STORE_URL, APP_WEB_URL } from '@/lib/site-config'
import Reveal from './Reveal'

const FEATURES = [
  { icon: CalendarCheck, key: 'app.f1' },
  { icon: Package, key: 'app.f2' },
  { icon: BellRing, key: 'app.f3' },
  { icon: QrCode, key: 'app.f4' },
] as const

// One store badge with the "Soon" logic: empty URL → dimmed + ribbon
function StoreBadge({
  href,
  icon: Icon,
  topLine,
  topLineSoon,
  storeName,
  soonLabel,
}: {
  href: string
  icon: typeof Apple
  topLine: string
  topLineSoon: string
  storeName: string
  soonLabel: string
}) {
  const live = href.trim().length > 0
  const inner = (
    <span
      className={`relative inline-flex items-center gap-3 rounded-2xl border px-5 py-3 min-w-[190px] transition-all ${
        live
          ? 'bg-cream text-ink border-cream hover:-translate-y-0.5'
          : 'bg-cream/10 text-cream/60 border-cream/20'
      }`}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <span className="text-start leading-tight">
        <span className="block text-[0.68rem] opacity-80">
          {live ? topLine : topLineSoon}
        </span>
        <span className="block font-bold text-base">{storeName}</span>
      </span>
      {!live && (
        <span className="absolute -top-2.5 -end-2 bg-terracotta text-cream text-[0.62rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
          {soonLabel} ✨
        </span>
      )}
    </span>
  )

  return live ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  )
}

export default function DownloadApp() {
  const { t } = useLang()

  return (
    <section id="app" className="py-24 md:py-32 bg-sage-deep relative overflow-hidden">
      {/* Soft sage glow */}
      <div
        className="absolute -top-32 -end-32 w-[420px] h-[420px] rounded-full bg-sage/25 blur-[110px]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-14 items-center relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[0.28em] uppercase mb-4 text-sage">
              <span className="w-2 h-2 rounded-full bg-sage inline-block" aria-hidden />
              {t('app.label')}
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15] font-bold text-cream">
              {t('app.title.1')}{' '}
              <em className="not-italic text-[#E5A181] tittle">{t('app.title.2')}</em>
            </h2>
            <p className="mt-4 text-cream/70 text-base md:text-lg max-w-lg leading-relaxed">
              {t('app.sub')}
            </p>
          </Reveal>

          {/* Feature list */}
          <Reveal delay={120}>
            <ul className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <li key={f.key} className="flex items-center gap-3.5 text-cream/90">
                  <span className="w-10 h-10 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center shrink-0">
                    <f.icon className="w-4.5 h-4.5 w-[18px] h-[18px] text-sage" />
                  </span>
                  <span className="text-[0.95rem] font-medium">{t(f.key)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Store badges with Soon logic */}
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <StoreBadge
                href={APP_STORE_URL}
                icon={Apple}
                topLine={t('app.appstore.top.live')}
                topLineSoon={t('app.appstore.top')}
                storeName="App Store"
                soonLabel={t('app.soon')}
              />
              <StoreBadge
                href={PLAY_STORE_URL}
                icon={Play}
                topLine={t('app.playstore.top.live')}
                topLineSoon={t('app.playstore.top')}
                storeName="Google Play"
                soonLabel={t('app.soon')}
              />
            </div>
            <a
              href={APP_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sage font-semibold underline underline-offset-8 decoration-sage/40 hover:decoration-sage transition-colors"
            >
              {t('app.web')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        {/* Phone mockup: real app entry point framed in a device shell */}
        <Reveal delay={180} className="justify-self-center">
          <div className="relative w-[270px]">
            <div className="rounded-[44px] border-[10px] border-ink/70 bg-cream overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
              {/* Simple in-frame splash built from brand assets */}
              <div className="aspect-[9/19] bg-cream flex flex-col items-center justify-center gap-5 p-6">
                <Image
                  src="/logo.png"
                  alt="Align with Enjy app"
                  width={150}
                  height={204}
                  className="w-[130px] h-auto"
                />
                <span className="w-2.5 h-2.5 rounded-full bg-sage" aria-hidden />
              </div>
            </div>
            {/* Floating sage dot echo */}
            <span
              className="absolute -bottom-3 -start-3 w-7 h-7 rounded-full bg-terracotta"
              aria-hidden
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
