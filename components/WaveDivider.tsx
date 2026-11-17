// Soft wave between two sections that share the same background.
import BrandIcon from './BrandIcon'

export default function WaveDivider() {
  return (
    <div className="flex justify-center bg-cream text-sage" aria-hidden>
      <BrandIcon name="wave" mode="mask" className="w-28 h-6" />
    </div>
  )
}
