'use client'

// Floating botanical SVG decorations — matches the Align app login screen.
// Usage: <FloatingBotanicals /> inside any relative-positioned container.
// All elements are pointer-events-none, low opacity, and animate slowly.

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
    <circle cx="16" cy="16" r="2.5" fill={color} opacity="0.3" />
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

/* ── Color map ───────────────────────────────────────────────── */

const COLORS = {
  sage: '#8FA98F',
  terracotta: '#C8907A', // softer than the CTA terracotta
  sageSoft: '#A8C3A8',
}

/* ── Element definitions ─────────────────────────────────────── */

interface FloralElement {
  Shape: React.FC<{ color: string }>
  color: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  opacity: number
  animIndex: number // 1, 2, or 3
  animDuration: string
  animDelay: string
  rotate: number
}

const ELEMENTS: FloralElement[] = [
  // Top-left daisy (large, sage)
  { Shape: Daisy, color: COLORS.sage, top: '4%', left: '4%', size: 48, opacity: 0.22, animIndex: 1, animDuration: '28s', animDelay: '0s', rotate: 15 },
  // Top-center-left circles
  { Shape: CirclePair, color: COLORS.sage, top: '10%', left: '22%', size: 22, opacity: 0.15, animIndex: 2, animDuration: '32s', animDelay: '3s', rotate: -20 },
  // Top-center bubble
  { Shape: Bubble, color: COLORS.sageSoft, top: '6%', left: '38%', size: 12, opacity: 0.18, animIndex: 3, animDuration: '24s', animDelay: '1s', rotate: 0 },
  // Top-right crescent
  { Shape: Crescent, color: COLORS.sage, top: '3%', right: '12%', size: 20, opacity: 0.18, animIndex: 2, animDuration: '30s', animDelay: '5s', rotate: 30 },
  // Right daisy (sage)
  { Shape: Daisy, color: COLORS.sageSoft, top: '14%', right: '3%', size: 42, opacity: 0.18, animIndex: 1, animDuration: '34s', animDelay: '2s', rotate: -25 },
  // Right terracotta flower
  { Shape: Flower5, color: COLORS.terracotta, top: '45%', right: '5%', size: 30, opacity: 0.16, animIndex: 3, animDuration: '26s', animDelay: '4s', rotate: 10 },
  // Bottom-right circle pair
  { Shape: CirclePair, color: COLORS.terracotta, bottom: '18%', right: '8%', size: 20, opacity: 0.14, animIndex: 1, animDuration: '28s', animDelay: '6s', rotate: 45 },
  // Bottom-right bubble
  { Shape: Bubble, color: COLORS.terracotta, bottom: '12%', right: '20%', size: 10, opacity: 0.15, animIndex: 2, animDuration: '22s', animDelay: '1s', rotate: 0 },
  // Bottom-center crescent
  { Shape: Crescent, color: COLORS.sage, bottom: '8%', left: '45%', size: 18, opacity: 0.14, animIndex: 3, animDuration: '30s', animDelay: '7s', rotate: -60 },
  // Bottom-left bubble
  { Shape: Bubble, color: COLORS.sage, bottom: '15%', left: '8%', size: 14, opacity: 0.16, animIndex: 1, animDuration: '26s', animDelay: '3s', rotate: 0 },
  // Left crescent
  { Shape: Crescent, color: COLORS.sageSoft, top: '35%', left: '2%', size: 16, opacity: 0.14, animIndex: 2, animDuration: '28s', animDelay: '8s', rotate: 90 },
  // Left terracotta flower (small)
  { Shape: Flower5, color: COLORS.terracotta, bottom: '35%', left: '6%', size: 24, opacity: 0.14, animIndex: 3, animDuration: '32s', animDelay: '5s', rotate: -15 },
  // Scattered small bubbles
  { Shape: Bubble, color: COLORS.sage, top: '25%', left: '30%', size: 8, opacity: 0.12, animIndex: 1, animDuration: '20s', animDelay: '2s', rotate: 0 },
  { Shape: Bubble, color: COLORS.terracotta, top: '55%', right: '30%', size: 9, opacity: 0.1, animIndex: 2, animDuration: '24s', animDelay: '4s', rotate: 0 },
]

/* ── Component ───────────────────────────────────────────────── */

export default function FloatingBotanicals({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      {ELEMENTS.map((el, i) => {
        const posStyle: React.CSSProperties = {
          position: 'absolute',
          width: el.size,
          height: el.size,
          opacity: el.opacity,
          transform: `rotate(${el.rotate}deg)`,
          animation: `botanicalFloat${el.animIndex} ${el.animDuration} ease-in-out ${el.animDelay} infinite alternate`,
        }
        if (el.top) posStyle.top = el.top
        if (el.bottom) posStyle.bottom = el.bottom
        if (el.left) posStyle.left = el.left
        if (el.right) posStyle.right = el.right

        return (
          <div key={i} style={posStyle}>
            <el.Shape color={el.color} />
          </div>
        )
      })}
    </div>
  )
}
