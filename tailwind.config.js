/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0a0a',
        'surface': '#111111',
        'border': '#2a2a2a',
        'border-dim': '#1a1a1a',
        'text': '#e8e6e0',
        'text-dim': '#888880',
        'text-mute': '#444440',
        'orange': '#e8621a',
        'orange-dim': '#c45214',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', '"Courier New"', 'Courier', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        'xs': '0.7rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
