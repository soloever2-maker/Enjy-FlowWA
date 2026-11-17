import type { Config } from 'tailwindcss'

// Brand palette: the logo's colours (terracotta, sage dots, slate) plus the
// identity system's Deep Sage, Warm Ivory and Charcoal for text and buttons.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE5',
        'cream-deep': '#ECE5D3',
        // Logo terracotta: logo, large headings, icons. For small text use terracotta-deep (passes 4.5:1 on cream).
        terracotta: '#C05A2F',
        'terracotta-deep': '#A84A22',
        sage: '#8FA98F',
        'sage-soft': '#E4E9DD',
        'sage-mid': '#4A6356',
        'sage-deep': '#35483E',
        slate: '#5B7F8A',
        ink: '#35332F',
        'ink-muted': '#5F5C55',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'var(--font-messiri)', 'serif'],
        body: ['var(--font-jost)', 'var(--font-plex-arabic)', 'sans-serif'],
      },
      borderRadius: { arch: '999px 999px 28px 28px', card: '16px', frame: '28px' },
    },
  },
  plugins: [],
}
export default config
