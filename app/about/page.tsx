import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import About from '@/components/About'
import Studio from '@/components/Studio'

export const metadata: Metadata = {
  title: 'About Enjy — Align with Enjy',
  description:
    'Meet Enjy Gebril and see the studio spaces.',
}

export default function AboutEnjyPage() {
  return (
    <SiteShell>
      <About />
      <Studio />
    </SiteShell>
  )
}
