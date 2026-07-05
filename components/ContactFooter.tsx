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
    <section id="contact" className="py-28 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            label={t('contact.label')}
            title={t('contact.title')}
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.titleKey} delay={i * 100}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border hairline p-9 transition-colors hover:bg-ink hover:border-ink h-full"
              >
                <c.icon className="w-6 h-6 text-terracotta mb-6" />
                <h3 className="font-display font-bold text-xl text-ink mb-2 transition-colors group-hover:text-cream">
                  {t(c.titleKey)}
                </h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed transition-colors group-hover:text-cream/60">
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
