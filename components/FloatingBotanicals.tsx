'use client'

// Floating botanical SVG decorations — matches the Align app login screen.
// Usage: <FloatingBotanicals /> inside any relative-positioned container.

/* ── SVG shape factories ─────────────────────────────────────── */

const Daisy = ({ color }: { color: string }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 60, 120, 180, 240, 300].map((r) => (
      <ellipse
        key={r}
        cx="22"
        cy="10"
        rx="4.5"
        ry="10"
        stroke={color}
        strokeWidth="1.2"
        transform={`rotate(${r} 22 22)`}
      />
    ))}
    <circle cx="22" cy="22" r="3" stroke={color} strokeWidth="1.2" />
  </svg>
)

const Flower5 = ({ color }: { color: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 72, 144, 216, 288].map((r) => (
      <ellipse
        key={r}
        cx="16"
        cy="7"
        rx="3.5"
        ry="7"
        stroke={color}
        strokeWidth="1.1"
        transform={`rotate(${r} 16 16)`}
      />
    ))}
    <circle cx="16" cy="16" r="2.5" fill={color} opacity="0.4" />
  </svg>
)

const Crescent = ({ color }: { color: string }) => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 16 4 A 9 9 0 0 0 4 16"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)

const CirclePair = ({ color }: { color: string }) => (
  <svg viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1" />
    <circle cx="20" cy="8" r="6" stroke={color} strokeWidth="1" />
  </svg>
)

const Bubble = ({ color }: { color: string }) => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5.5" stroke={color} strokeWidth="1" />
  </svg>
)

/* ── Colors ───────────────────────────────────────────────────── */

const SAGE = '#8FA98F'
const SAGE_SOFT = '#A8C3A8'
const TERRA = '#C8907A'

/* ── Element definitions ─────────────────────────────────────── */

interface FloralEl {
  Shape: React.FC<{ color: string }>
  color: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  opacity: number
  anim: string // full animation shorthand
}

const ELEMENTS: FloralEl[] = [
  // ── Top-left daisy (large, sage)
  { Shape: Daisy, color: SAGE, top: '3%', left: '3%', size: 60, opacity: 0.35,
    anim: 'botanicalFloat1 26s ease-in-out infinite alternate' },
  // ── Top-center-left circles
  { Shape: CirclePair, color: SAGE, top: '8%', left: '24%', size: 28, opacity: 0.25,
    anim: 'botanicalFloat2 30s ease-in-out 2s infinite alternate' },
  // ── Top-center bubble
  { Shape: Bubble, color: SAGE_SOFT, top: '5%', left: '42%', size: 16, opacity: 0.3,
    anim: 'botanicalFloat3 22s ease-in-out 1s infinite alternate' },
  // ── Top-right crescent
  { Shape: Crescent, color: SAGE, top: '2%', right: '10%', size: 24, opacity: 0.28,
    anim: 'botanicalFloat2 28s ease-in-out 4s infinite alternate' },
  // ── Right daisy (sage)
  { Shape: Daisy, color: SAGE_SOFT, top: '12%', right: '2%', size: 55, opacity: 0.3,
    anim: 'botanicalFloat1 32s ease-in-out 1s infinite alternate' },
  // ── Right terracotta flower
  { Shape: Flower5, color: TERRA, top: '42%', right: '4%', size: 38, opacity: 0.3,
    anim: 'botanicalFloat3 24s ease-in-out 3s infinite alternate' },
  // ── Bottom-right circle pair
  { Shape: CirclePair, color: TERRA, bottom: '16%', right: '6%', size: 26, opacity: 0.22,
    anim: 'botanicalFloat1 26s ease-in-out 5s infinite alternate' },
  // ── Bottom-right bubble
  { Shape: Bubble, color: TERRA, bottom: '10%', right: '22%', size: 14, opacity: 0.25,
    anim: 'botanicalFloat2 20s ease-in-out infinite alternate' },
  // ── Bottom-center crescent
  { Shape: Crescent, color: SAGE, bottom: '6%', left: '48%', size: 22, opacity: 0.22,
    anim: 'botanicalFloat3 28s ease-in-out 6s infinite alternate' },
  // ── Bottom-left bubble
  { Shape: Bubble, color: SAGE, bottom: '14%', left: '6%', size: 18, opacity: 0.28,
    anim: 'botanicalFloat1 24s ease-in-out 2s infinite alternate' },
  // ── Left crescent
  { Shape: Crescent, color: SAGE_SOFT, top: '32%', left: '1%', size: 20, opacity: 0.22,
    anim: 'botanicalFloat2 26s ease-in-out 7s infinite alternate' },
  // ── Left terracotta flower
  { Shape: Flower5, color: TERRA, bottom: '32%', left: '5%', size: 32, opacity: 0.25,
    anim: 'botanicalFloat3 30s ease-in-out 4s infinite alternate' },
  // ── Scattered bubbles
  { Shape: Bubble, color: SAGE, top: '22%', left: '32%', size: 10, opacity: 0.2,
    anim: 'botanicalFloat1 18s ease-in-out 1s infinite alternate' },
  { Shape: Bubble, color: TERRA, top: '52%', right: '28%', size: 12, opacity: 0.18,
    anim: 'botanicalFloat2 22s ease-in-out 3s infinite alternate' },
]

/* ── Component ───────────────────────────────────────────────── */

export default function FloatingBotanicals({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {ELEMENTS.map((el, i) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          width: el.size,
          height: el.size,
          opacity: el.opacity,
          animation: el.anim,
        }
        if (el.top) style.top = el.top
        if (el.bottom) style.bottom = el.bottom
        if (el.left) style.left = el.left
        if (el.right) style.right = el.right

        return (
          <div key={i} style={style}>
            <el.Shape color={el.color} />
          </div>
        )
      })}
    </div>
  )
}
