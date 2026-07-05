'use client'

import { MessageCircle, Shirt, Sparkles, Layers } from 'lucide-react'
import { useLang } from '@/lib/lang-context'
import {
  STORE_PRODUCTS,
  WHATSAPP_URL,
  STORE_NOTIFY_MESSAGE_AR,
  STORE_NOTIFY_MESSAGE_EN,
} from '@/lib/site-config'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const ICONS: Record<string, typeof Shirt> = {
  mat: Layers,
  apparel: Shirt,
  accessories: Sparkles,
}

export default function Store() {
  const { lang, t } = useLang()
  const notifyHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
    lang === 'ar' ? STORE_NOTIFY_MESSAGE_AR : STORE_NOTIFY_MESSAGE_EN
  )}`

  return (
    <section id="store" className="py-24 md:py-32 bg-cream-deep">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            label={t('store.label')}
            title={t('store.title')}
            sub={t('store.sub')}
            center
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {STORE_PRODUCTS.map((p, i) => {
            const Icon = ICONS[p.icon] ?? Sparkles
            return (
              <Reveal key={p.icon} delay={i * 100}>
                <div className="relative arch bg-cream p-8 pt-12 text-center overflow-hidden">
                  {/* Soft blur veil communicates "not open yet" */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage-soft flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-sage-deep" />
                  </div>
                  <h3 className="font-semibold text-ink">
                    {lang === 'ar' ? p.ar : p.en}
                  </h3>
                  <span className="mt-4 inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase text-terracotta bg-terracotta/10 px-3.5 py-1.5 rounded-full">
                    {t('store.soon')} ✨
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-10">
            <a
              href={notifyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-terracotta hover:bg-terracotta-deep text-cream font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              {t('store.notify')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
