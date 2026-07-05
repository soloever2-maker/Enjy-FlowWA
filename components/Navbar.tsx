'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/lang-context'

const LINKS = [
  { href: '#classes', key: 'nav.classes' },
  { href: '#retreats', key: 'nav.retreats' },
  { href: '#reviews', key: 'nav.reviews' },
  { href: '#store', key: 'nav.store' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
] as const

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl border-b border-ink/5 py-2.5'
            : 'py-4'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-4">
          {/* Wordmark */}
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Align with Enjy"
              width={34}
              height={46}
              className="w-[30px] h-auto"
            />
            <span className="font-display font-bold text-lg text-terracotta lowercase tracking-tight hidden sm:block">
              align with enjy
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.88rem] font-medium text-ink-muted hover:text-terracotta transition-colors"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="text-[0.8rem] font-bold px-3.5 py-1.5 rounded-full border border-ink/15 text-ink-muted hover:border-terracotta hover:text-terracotta transition-colors"
              aria-label="Switch language"
            >
              {lang === 'ar' ? 'EN' : 'العربية'}
            </button>

            {/* CTA */}
            <a
              href="#app"
              className="hidden md:inline-flex bg-terracotta hover:bg-terracotta-deep text-cream text-[0.85rem] font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              {t('nav.cta')}
            </a>

            {/* Mobile hamburger */}
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

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] bg-ink/40 transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed top-0 bottom-0 z-[80] w-[78%] max-w-xs bg-cream shadow-2xl transition-transform duration-400 lg:hidden end-0 ${
          open ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-ink/8">
          <Image src="/logo.png" alt="" width={28} height={38} className="w-[26px] h-auto" />
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-1">
            <X className="w-6 h-6 text-ink" />
          </button>
        </div>
        <ul className="p-5 space-y-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-lg font-medium text-ink border-b border-ink/8 hover:text-terracotta transition-colors"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5">
          <a
            href="#app"
            onClick={() => setOpen(false)}
            className="block text-center bg-terracotta text-cream font-semibold py-3.5 rounded-full"
          >
            {t('nav.cta')}
          </a>
        </div>
      </aside>
    </>
  )
}
