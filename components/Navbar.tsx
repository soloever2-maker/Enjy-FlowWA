'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/lang-context'

const LINKS = [
  { href: '#classes', key: 'nav.classes' },
  { href: '#retreats', key: 'nav.retreats' },
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
          scrolled ? 'bg-cream/90 backdrop-blur-xl border-b hairline py-3' : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Wordmark — pure type, exactly like the logo */}
          <a
            href="#top"
            className={`font-display font-bold text-xl lowercase tracking-tight transition-colors ${
              scrolled ? 'text-terracotta' : 'text-cream'
            }`}
          >
            align with enjy
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`eyebrow transition-colors ${
                    scrolled
                      ? 'text-ink-muted hover:text-terracotta'
                      : 'text-cream/85 hover:text-cream'
                  }`}
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className={`eyebrow px-2 py-1 transition-colors ${
                scrolled
                  ? 'text-ink-muted hover:text-terracotta'
                  : 'text-cream/85 hover:text-cream'
              }`}
              aria-label="Switch language"
            >
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            <a
              href="#app"
              className={`hidden md:inline-flex eyebrow px-6 py-3 transition-colors ${
                scrolled
                  ? 'bg-ink text-cream hover:bg-terracotta'
                  : 'bg-cream text-ink hover:bg-terracotta hover:text-cream'
              }`}
            >
              {t('nav.cta')}
            </a>

            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-1.5 ${scrolled ? 'text-ink' : 'text-cream'}`}
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
        className={`fixed top-0 bottom-0 z-[80] w-[80%] max-w-xs bg-cream transition-transform duration-300 lg:hidden end-0 ${
          open ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b hairline">
          <span className="font-display font-bold text-terracotta lowercase">
            align with enjy
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-1">
            <X className="w-6 h-6 text-ink" />
          </button>
        </div>
        <ul className="px-6 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg font-medium text-ink border-b hairline hover:text-terracotta transition-colors"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-4">
          <a
            href="#app"
            onClick={() => setOpen(false)}
            className="block text-center bg-ink text-cream eyebrow py-4"
          >
            {t('nav.cta')}
          </a>
        </div>
      </aside>
    </>
  )
}
