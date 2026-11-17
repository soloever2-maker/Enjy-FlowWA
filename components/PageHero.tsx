'use client'

// Photo opener for inner pages — same look as the Retreats opener:
// full-bleed photo, soft shade, page title in ivory.
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import Reveal from './Reveal'

export default function PageHero({
  image,
  titleKey,
  position = 'center 40%',
}: {
  image: string
  titleKey: Parameters<ReturnType<typeof useLang>['t']>[0]
  position?: string
}) {
  const { t } = useLang()
  return (
    <section className="relative h-[42vh] min-h-[300px] md:h-[56vh] md:min-h-[420px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(53,72,62,0.15) 0%, rgba(53,72,62,0.55) 100%)' }}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-6 w-full pb-10 md:pb-14">
          <Reveal>
            <p className="eyebrow text-cream/80 mb-3">Align with Enjy</p>
            <h1 className="font-display text-cream font-bold text-4xl md:text-6xl leading-[1.08]">
              {t(titleKey)}
            </h1>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
