import type { Config } from 'tailwindcss'

// Brand palette sampled directly from the official logo file
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E6',
        'cream-deep': '#ECE5D3',
        terracotta: '#C05A2F',
        'terracotta-deep': '#A84A22',
        sage: '#8FA98F',
        'sage-soft': '#E4EAE2',
        'sage-deep': '#41533F',
        slate: '#5B7F8A',
        ink: '#2B2B26',
        'ink-muted': '#6E685C',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'var(--font-cairo)', 'serif'],
        body: ['var(--font-dmsans)', 'var(--font-cairo)', 'sans-serif'],
      },
      borderRadius: { arch: '999px 999px 28px 28px' },
    },
  },
  plugins: [],
}
export default config
