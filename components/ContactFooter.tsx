'use client'

import { MessageCircle, Instagram, MapPin } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  PRIVACY_URL,
} from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const CARDS = [
  {
    icon: MessageCircle,
    href: WHATSAPP_URL,
    titleKey: 'contact.whatsapp',
    subKey: 'contact.whatsapp.sub',
  },
  {
    icon: Instagram,
    href: INSTAGRAM_URL,
    titleKey: 'contact.instagram',
    subKey: 'contact.instagram.sub',
  },
  {
    icon: MapPin,
    href: MAPS_URL,
    titleKey: 'contact.location',
    subKey: 'contact.location.sub',
  },
] as const

export function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            label={t('contact.label')}
            title={t('contact.title')}
            center
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CARDS.map((c, i) => (
            <Reveal key={c.titleKey} delay={i * 100}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream-deep rounded-[24px] p-8 text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(43,43,38,0.12)] h-full"
              >
                <span className="w-14 h-14 mx-auto rounded-full bg-sage-soft flex items-center justify-center mb-4 transition-colors group-hover:bg-terracotta">
                  <c.icon className="w-6 h-6 text-sage-deep transition-colors group-hover:text-cream" />
                </span>
                <h3 className="font-semibold text-ink mb-1.5">{t(c.titleKey)}</h3>
                <p className="text-[0.82rem] text-ink-muted leading-relaxed">
                  {t(c.subKey)}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-cream-deep border-t border-ink/8 pt-14 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        {/* Oversized wordmark spanning the width */}
        <p
          className="font-display font-bold text-terracotta lowercase leading-none text-[clamp(2.6rem,9vw,6.5rem)] tracking-tight text-center select-none"
          aria-hidden
        >
          align with enjy
        </p>
        <p className="text-center text-[0.75rem] tracking-[0.3em] uppercase text-slate font-semibold mt-3">
          {t('footer.tagline')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/8 pt-6 text-[0.8rem] text-ink-muted">
          <p>
            © {new Date().getFullYear()} Align with Enjy — {t('footer.rights')}
          </p>
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors underline underline-offset-4"
          >
            {t('footer.privacy')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
