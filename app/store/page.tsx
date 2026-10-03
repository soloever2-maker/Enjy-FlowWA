import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Store from '@/components/Store'

export const metadata: Metadata = {
  title: 'Store — Align with Enjy',
  description:
    'The Align with Enjy store.',
}

export default function StorePage() {
  return (
    <SiteShell>
      <Store />
    </SiteShell>
  )
}
