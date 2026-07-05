'use client'

import { useLang } from '@/lib/lang-context'
import {
  STORE_PRODUCTS,
  WHATSAPP_URL,
  STORE_NOTIFY_MESSAGE_AR,
  STORE_NOTIFY_MESSAGE_EN,
} from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Store() {
  const { lang, t } = useLang()
  const notifyHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
    lang === 'ar' ? STORE_NOTIFY_MESSAGE_AR : STORE_NOTIFY_MESSAGE_EN
  )}`

  return (
    <section id="store" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('store.label')}
            title={t('store.title')}
            sub={t('store.sub')}
          />
        </Reveal>

        {/* Quiet index rows — the store speaks when it opens */}
        <div className="border-t hairline">
          {STORE_PRODUCTS.map((p, i) => (
            <Reveal key={p.icon} delay={i * 60}>
              <div className="flex items-center justify-between gap-6 py-8 md:py-10 border-b hairline">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-ink/45">
                  {lang === 'ar' ? p.ar : p.en}
                </h3>
                <span className="eyebrow text-terracotta shrink-0">
                  {t('store.soon')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <a
            href={notifyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex eyebrow bg-ink text-cream px-9 py-4 hover:bg-terracotta transition-colors"
          >
            {t('store.notify')}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
