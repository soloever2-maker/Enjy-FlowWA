import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Cairo } from 'next/font/google'
import { LangProvider } from '@/lib/lang-context'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const dmsans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
})
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  // Update this when the final domain is connected
  metadataBase: new URL('https://alignwithenjy.vercel.app'),
  title: 'Align with Enjy — Ladies-Only Yoga & Wellness Studio',
  description:
    'استوديو يوجا وويلنس للسيدات فقط بقيادة إنجي جبريل — كلاسات، ريتريتس، ومجتمع نسائي آمن وداعم. Yoga · Fitness · Wellness, a ladies-only studio in Egypt.',
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmsans.variable} ${cairo.variable} font-body bg-cream text-ink antialiased`}
      >
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
