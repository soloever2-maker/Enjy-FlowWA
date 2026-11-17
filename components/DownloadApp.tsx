'use client'

import { Apple, Play } from 'lucide-react'
import BrandIcon, { type BrandIconName } from './BrandIcon'
import { useLang } from '@/lib/lang-context'
import { APP_STORE_URL, PLAY_STORE_URL, APP_WEB_URL } from '@/lib/site-config'
import Reveal from './Reveal'
import FloatingBotanicals from './FloatingBotanicals'

const FEATURES = [
  { icon: 'booking', key: 'app.f1' },
  { icon: 'remaining-sessions', key: 'app.f2' },
  { icon: 'notifications', key: 'app.f3' },
  { icon: 'qr-code', key: 'app.f4' },
] as const satisfies readonly { icon: BrandIconName; key: string }[]

// Store badge with Soon logic: empty URL → dimmed + label swap
function StoreBadge({
  href,
  icon: Icon,
  topLine,
  topLineSoon,
  storeName,
}: {
  href: string
  icon: typeof Apple
  topLine: string
  topLineSoon: string
  storeName: string
}) {
  const live = href.trim().length > 0
  const inner = (
    <span
      className={`inline-flex items-center gap-3.5 border rounded-full px-6 py-3.5 min-w-[200px] transition-all ${
        live
          ? 'bg-cream text-sage-deep border-cream hover:bg-sage-soft hover:border-sage-soft'
          : 'bg-transparent text-cream/50 border-cream/25'
      }`}
    >
      <Icon className="w-6 h-6 shrink-0" />
      <span className="text-start leading-tight">
        <span className="block text-[0.62rem] tracking-[0.14em] uppercase opacity-80">
          {live ? topLine : topLineSoon}
        </span>
        <span className="block font-bold text-[0.95rem]">{storeName}</span>
      </span>
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
    <section id="app" className="relative overflow-hidden py-16 md:py-24 bg-sage-deep">
      <FloatingBotanicals tone="light" mirror />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-5 mb-6 text-cream/50">
            <span className="eyebrow">{t('app.label')}</span>
            <span className="text-cream/40">
              <BrandIcon name="dots" mode="mask" className="w-14 h-2.5" />
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.08] font-bold text-cream max-w-3xl">
            {t('app.title.1')} <em className="italic">{t('app.title.2')}</em>
          </h2>
          <p className="mt-5 text-cream/65 text-base md:text-lg max-w-xl leading-relaxed">
            {t('app.sub')}
          </p>
        </Reveal>

        {/* Feature index rows */}
        <Reveal delay={120}>
          <ul className="mt-10 md:mt-12 border-t border-cream/15">
            {FEATURES.map((f) => (
              <li
                key={f.key}
                className="flex items-center gap-5 py-5 border-b border-cream/15 text-cream/90"
              >
                <span className="text-sage"><BrandIcon name={f.icon} mode="mask" className="w-7 h-7" /></span>
                <span className="text-base md:text-lg font-medium">{t(f.key)}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Badges */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <StoreBadge
              href={APP_STORE_URL}
              icon={Apple}
              topLine={t('app.appstore.top.live')}
              topLineSoon={t('app.appstore.top')}
              storeName="App Store"
            />
            <StoreBadge
              href={PLAY_STORE_URL}
              icon={Play}
              topLine={t('app.playstore.top.live')}
              topLineSoon={t('app.playstore.top')}
              storeName="Google Play"
            />
          </div>
          <a
            href={APP_WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block eyebrow text-cream/70 border-b border-cream/30 pb-1.5 hover:text-cream hover:border-cream transition-colors"
          >
            {t('app.web')}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
