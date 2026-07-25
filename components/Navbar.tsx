'use client'

// Navbar — clean desktop links + full-screen mobile overlay menu
// with floating botanical decorations and horizontal text logo.
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram, MessageCircle } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import { WHATSAPP_URL, INSTAGRAM_URL } from '@/lib/site-config'
import FloatingBotanicals from './FloatingBotanicals'

const NAV_LINKS = [
  { href: '#classes', key: 'nav.classes' },
  { href: '#retreats', key: 'nav.retreats' },
  { href: '#store', key: 'nav.store' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
] as const

/* ── Horizontal text logo (replaces tiny vertical PNG on mobile) ── */
function BrandLogo({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const text = size === 'sm' ? 'text-base' : 'text-lg'
  return (
    <span className={`font-display italic ${text} leading-none tracking-tight select-none`}>
      <span className="text-terracotta">align </span>
      <span className="text-sage-deep">with </span>
      <span className="text-terracotta">enjy</span>
    </span>
  )
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      {/* ── Fixed top bar ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-cream transition-all duration-300 ${
          scrolled ? 'border-b hairline shadow-sm' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
          {/* Logo — text on mobile, PNG on desktop */}
          <a href="#top" className="flex-shrink-0">
            {/* Mobile: horizontal text logo */}
            <span className="lg:hidden">
              <BrandLogo size="sm" />
            </span>
            {/* Desktop: PNG logo */}
            <Image
              src="/logo-transparent.png"
              alt="Align with Enjy"
              width={100}
              height={40}
              className="hidden lg:block h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="eyebrow text-ink-muted hover:text-terracotta transition-colors"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle — desktop only */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="hidden lg:inline-flex eyebrow px-2 py-1 text-ink-muted hover:text-terracotta transition-colors"
              aria-label="Switch language"
            >
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            {/* CTA — desktop only */}
            <a
              href="#app"
              className="hidden lg:inline-flex eyebrow px-6 py-2.5 bg-ink text-cream hover:bg-terracotta transition-colors"
            >
              {t('nav.cta')}
            </a>

            {/* Hamburger — mobile/tablet */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-1.5 text-ink"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile menu ───────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Cream background */}
        <div className="absolute inset-0 bg-cream" />

        {/* Floating botanicals — behind content */}
        <FloatingBotanicals className="z-0" />

        {/* Content — above botanicals */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top bar — logo + close */}
          <div className="flex items-center justify-between px-5 h-14">
            <a href="#top" onClick={close} className="flex-shrink-0">
              <BrandLogo size="sm" />
            </a>
            <button
              onClick={close}
              className="p-1.5 text-ink hover:text-terracotta transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links — centered, large display font */}
          <div className="flex-1 flex flex-col justify-center px-8">
            <ul className="space-y-1">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="group flex items-center py-3.5 transition-all"
                    style={{
                      transform: open ? 'translateY(0)' : 'translateY(20px)',
                      opacity: open ? 1 : 0,
                      transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                        open ? i * 70 + 100 : 0
                      }ms, opacity 0.4s ease ${open ? i * 70 + 100 : 0}ms`,
                    }}
                  >
                    <span className="hidden sm:block w-0 group-hover:w-10 h-px bg-terracotta transition-all duration-300 me-0 group-hover:me-4" />
                    <span className="font-display text-ink text-3xl sm:text-4xl font-bold group-hover:text-terracotta transition-colors duration-300">
                      {t(l.key)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom — CTA + social + language */}
          <div
            className="px-8 pb-10 space-y-6"
            style={{
              transform: open ? 'translateY(0)' : 'translateY(16px)',
              opacity: open ? 1 : 0,
              transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                open ? NAV_LINKS.length * 70 + 200 : 0
              }ms, opacity 0.4s ease ${open ? NAV_LINKS.length * 70 + 200 : 0}ms`,
            }}
          >
            <a
              href="#app"
              onClick={close}
              className="block text-center eyebrow bg-ink text-cream py-4 hover:bg-terracotta transition-colors"
            >
              {t('nav.cta')}
            </a>

            <div className="flex items-center justify-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-xs tracking-wider uppercase font-semibold">Instagram</span>
              </a>

              <span className="w-px h-4 bg-ink/15" aria-hidden />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-terracotta transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs tracking-wider uppercase font-semibold">WhatsApp</span>
              </a>

              <span className="w-px h-4 bg-ink/15" aria-hidden />

              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="eyebrow text-ink-muted hover:text-terracotta transition-colors px-1"
                aria-label="Switch language"
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
