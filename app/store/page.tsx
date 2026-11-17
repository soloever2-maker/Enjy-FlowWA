import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Store from '@/components/Store'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Store — Align with Enjy',
  description:
    'The Align with Enjy store.',
}

export default function StorePage() {
  return (
    <SiteShell>
      <PageHero image="/store-hero.jpg" titleKey="nav.store" />
      <Store />
    </SiteShell>
  )
}
