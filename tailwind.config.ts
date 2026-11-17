import type { Config } from 'tailwindcss'

// Brand identity palette (Align with Enjy brand book). The logo keeps its own
// colours (logo-terracotta, logo-sage, slate) — use those only for the logo and wordmark.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EFE5',
        'cream-deep': '#ECE5D3',
        // Dusty Terracotta: accent fills only (badges, highlights, stars). Too light for text on cream.
        terracotta: '#C58F79',
        'terracotta-soft': '#F1E0D7',
        // Terracotta for text and links (5.1:1 on cream).
        'terracotta-deep': '#8F5641',
        sage: '#A8B59A',
        'sage-soft': '#E4E9DD',
        'sage-mid': '#4A6356',
        'sage-deep': '#35483E',
        slate: '#5B7F8A',
        'logo-terracotta': '#C05A2F',
        'logo-sage': '#8FA98F',
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
