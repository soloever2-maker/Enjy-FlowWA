'use client'

// App download popup — shown over a blurred site on first load.
// Closing it (X, backdrop, Escape, "continue", or a store button)
// hides it for 7 days on that device.
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, Apple, Play } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/site-config'

const STORAGE_KEY = 'align-app-popup-dismissed-at'
const HIDE_FOR_MS = 7 * 24 * 60 * 60 * 1000

function wasDismissedRecently() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const at = Number(raw)
    return Number.isFinite(at) && Date.now() - at < HIDE_FOR_MS
  } catch {
    return false
  }
}

function StoreButton({
  href,
  icon: Icon,
  topLine,
  storeName,
  onClick,
}: {
  href: string
  icon: typeof Apple
  topLine: string
  storeName: string
  onClick: () => void
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex-1 inline-flex items-center justify-center gap-3 bg-ink text-cream px-5 py-3.5 hover:bg-terracotta transition-colors"
    >
      <Icon className="w-6 h-6 shrink-0" />
      <span className="text-start leading-tight">
        <span className="block text-[0.62rem] tracking-[0.14em] uppercase opacity-80">
          {topLine}
        </span>
        <span className="block font-bold text-[0.95rem]">{storeName}</span>
      </span>
    </a>
  )
}

export default function AppPopup() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Decide on the client only, after mount
  useEffect(() => {
    if (!wasDismissedRecently()) setOpen(true)
  }, [])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {
      // storage unavailable — just close for this page view
    }
    setOpen(false)
  }, [])

  // Lock page scroll, focus the close button, close on Escape
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, dismiss])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5 animate-menuFadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-popup-title"
    >
      {/* Blurred backdrop — click to close */}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full bg-ink/45 backdrop-blur-md cursor-default"
      />

      {/* Card */}
      <div className="relative w-full max-w-md bg-cream shadow-2xl px-7 pt-12 pb-8 md:px-10 md:pt-14 md:pb-10 text-center animate-menuSlideUp">
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 end-3 p-2 text-ink-muted hover:text-terracotta transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <Image
          src="/logo-transparent.png"
          alt="Align with Enjy"
          width={140}
          height={190}
          className="mx-auto h-24 w-auto object-contain"
        />

        <p className="eyebrow text-terracotta mt-6">{t('app.label')}</p>
        <h2
          id="app-popup-title"
          className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight text-ink"
        >
          {t('app.title.1')} <em className="italic">{t('app.title.2')}</em>
        </h2>
        <p className="mt-3 text-ink-muted text-sm md:text-base leading-relaxed">
          {t('app.sub')}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <StoreButton
            href={APP_STORE_URL}
            icon={Apple}
            topLine={t('app.appstore.top.live')}
            storeName="App Store"
            onClick={dismiss}
          />
          <StoreButton
            href={PLAY_STORE_URL}
            icon={Play}
            topLine={t('app.playstore.top.live')}
            storeName="Google Play"
            onClick={dismiss}
          />
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="mt-6 eyebrow text-ink-muted border-b border-ink/20 pb-1.5 hover:text-terracotta hover:border-terracotta transition-colors"
        >
          {t('popup.continue')}
        </button>
      </div>
    </div>
  )
}
