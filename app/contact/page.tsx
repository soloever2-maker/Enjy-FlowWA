import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import { Contact } from '@/components/ContactFooter'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Contact — Align with Enjy',
  description:
    'Get in touch with Align with Enjy and read the frequently asked questions.',
}

export default function ContactPage() {
  return (
    <SiteShell>
      <Contact />
      <FAQ />
    </SiteShell>
  )
}
