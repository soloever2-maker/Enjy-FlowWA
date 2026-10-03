// Shared page frame: fixed navbar on top, footer + WhatsApp button below.
// Inner pages get top padding equal to the navbar height; the home page
// skips it because the hero handles its own offset.
import type { ReactNode } from 'react'
import Navbar from './Navbar'
import { Footer, WhatsAppFloat } from './ContactFooter'

export default function SiteShell({
  children,
  offsetTop = true,
}: {
  children: ReactNode
  offsetTop?: boolean
}) {
  return (
    <main className={offsetTop ? 'pt-14 md:pt-16' : ''}>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
