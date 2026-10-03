import SiteShell from '@/components/SiteShell'
import Hero from '@/components/Hero'
import FirstClass from '@/components/FirstClass'
import Reviews from '@/components/Reviews'
import DownloadApp from '@/components/DownloadApp'

export default function Home() {
  return (
    <SiteShell offsetTop={false}>
      <Hero />
      <FirstClass />
      <Reviews />
      <DownloadApp />
    </SiteShell>
  )
}
