// Brand icon family (public/icons). Two ways to draw one:
// - "color": the original artwork, Deep Sage line + Dusty Terracotta dot. Use on light backgrounds.
// - "mask": a single colour taken from the text colour (currentColor). Use on dark or
//   hover-changing backgrounds, and for decorative dividers.
export type BrandIconName =
  | 'balance'
  | 'booking'
  | 'instructor'
  | 'location'
  | 'notifications'
  | 'qr-code'
  | 'remaining-sessions'
  | 'retreats'
  | 'women-community'
  | 'yoga'
  | 'dots'
  | 'wave'

export default function BrandIcon({
  name,
  mode = 'color',
  className = 'w-6 h-6',
}: {
  name: BrandIconName
  mode?: 'color' | 'mask'
  className?: string
}) {
  const src = `/icons/${name}.png`

  if (mode === 'mask') {
    return (
      <span
        aria-hidden
        className={`inline-block shrink-0 bg-current ${className}`}
        style={{
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    )
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden className={`inline-block shrink-0 object-contain ${className}`} />
}
