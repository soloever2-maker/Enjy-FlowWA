import type { Metadata } from 'next'
import { Playfair_Display, Jost, IBM_Plex_Sans_Arabic, El_Messiri } from 'next/font/google'
import { LangProvider } from '@/lib/lang-context'
import AppPopup from '@/components/AppPopup'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})
// Arabic text: Plex Sans Arabic for body copy, El Messiri for headings.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-arabic',
  display: 'swap',
})
const messiri = El_Messiri({
  subsets: ['arabic'],
  weight: ['500', '600', '700'],
  variable: '--font-messiri',
  display: 'swap',
})

export const metadata: Metadata = {
  // Update this when the final domain is connected
  metadataBase: new URL('https://alignwithenjy.vercel.app'),
  title: 'Align with Enjy — Ladies-Only Yoga & Wellness Studio',
  description:
    'استوديو يوجا وويلنس للسيدات فقط بقيادة إنجي جبريل — كلاسات، ريتريتس، ومجتمع نسائي آمن وداعم. Yoga · Fitness · Wellness, a ladies-only studio in Egypt.',
  // Tells the browser (especially iOS Safari) to paint the status bar
  // and any exposed chrome area in cream instead of white.
  themeColor: '#F4EFE5',
  openGraph: {
    title: 'Align with Enjy — Yoga · Fitness · Wellness',
    description:
      'استوديو يوجا وويلنس للسيدات فقط — كلاسات وريتريتس ومجتمع نسائي آمن بقيادة إنجي جبريل.',
    images: ['/retreat-aswan.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Align with Enjy — Yoga · Fitness · Wellness',
    description:
      'A ladies-only yoga & wellness studio in Egypt, led by Enjy Gebril.',
    images: ['/retreat-aswan.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Arabic is the default; LangProvider flips lang/dir on the client
    <html lang="ar" dir="rtl" suppressHydrationWarning style={{ backgroundColor: '#F4EFE5' }}>
      <body
        className={`${playfair.variable} ${jost.variable} ${plexArabic.variable} ${messiri.variable} font-body bg-cream text-ink antialiased`}
        style={{ backgroundColor: '#F4EFE5' }}
      >
        <LangProvider>
          {children}
          <AppPopup />
        </LangProvider>
      </body>
    </html>
  )
}
