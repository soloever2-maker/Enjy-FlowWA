'use client'

// "Your First Class" — three-step onboarding strip.
// Clean numbered steps in the editorial style, no cards.
import { useLang } from '@/lib/lang-context'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import FloatingBotanicals from './FloatingBotanicals'

const STEPS = [
  { num: '01', title: 'first.step1.title', desc: 'first.step1.desc' },
  { num: '02', title: 'first.step2.title', desc: 'first.step2.desc' },
  { num: '03', title: 'first.step3.title', desc: 'first.step3.desc' },
] as const

export default function FirstClass() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-sage-deep text-cream">
      <FloatingBotanicals tone="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            label={t('first.label')}
            title={t('first.title')}
            sub={t('first.sub')}
            light
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 120}>
              <div className="group">
                {/* Step number */}
                <span className="font-display text-5xl md:text-6xl font-bold text-cream/15 block mb-5 transition-colors group-hover:text-terracotta/40">
                  {step.num}
                </span>

                {/* Hairline */}
                <div className="h-px bg-cream/15 mb-6" aria-hidden />

                {/* Content */}
                <h3 className="font-display font-bold text-xl md:text-2xl text-cream mb-3">
                  {t(step.title)}
                </h3>
                <p className="text-cream/65 text-sm md:text-base leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="mt-10 md:mt-14 pt-8 border-t border-cream/10 flex flex-wrap items-center gap-6">
            <a
              href="/#app"
              className="btn-light eyebrow px-9 py-4"
            >
              {t('hero.cta.primary')}
            </a>
            <a
              href="/classes"
              className="eyebrow text-cream/70 border-b border-cream/30 pb-1.5 hover:text-cream hover:border-cream transition-colors"
            >
              {t('hero.cta.secondary')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
