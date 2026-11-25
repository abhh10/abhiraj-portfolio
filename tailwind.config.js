/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        fg: '#f2f2f2',
        dim: '#8a8a8a',
        mute: '#787878',
        line: '#262626',
        'line-hover': '#5a5a5a',
        ok: '#3fb950',
      },
      fontFamily: {
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
