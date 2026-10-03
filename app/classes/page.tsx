import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import Classes from '@/components/Classes'
import SchedulePreview from '@/components/SchedulePreview'

export const metadata: Metadata = {
  title: 'Classes — Align with Enjy',
  description:
    'Yoga, pilates and wellness classes at Align with Enjy, with the weekly schedule.',
}

export default function ClassesPage() {
  return (
    <SiteShell>
      <Classes />
      <SchedulePreview />
    </SiteShell>
  )
}
