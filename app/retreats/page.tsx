import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Retreats from '@/components/Retreats'

export const metadata: Metadata = {
  title: 'Retreats — Align with Enjy',
  description:
    'Wellness retreats with Align with Enjy.',
}

export default function RetreatsPage() {
  return (
    <SiteShell>
      <Retreats />
    </SiteShell>
  )
}
