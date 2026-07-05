import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Classes from '@/components/Classes'
import Retreats from '@/components/Retreats'
import Reviews from '@/components/Reviews'
import Store from '@/components/Store'
import About from '@/components/About'
import Studio from '@/components/Studio'
import DownloadApp from '@/components/DownloadApp'
import { Contact, Footer, WhatsAppFloat } from '@/components/ContactFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Classes />
      <Retreats />
      <Reviews />
      <Store />
      <About />
      <Studio />
      <DownloadApp />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
