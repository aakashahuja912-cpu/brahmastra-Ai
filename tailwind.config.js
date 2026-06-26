/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'arctic':    '#F1F6F4',
        'mint':      '#D9E8E2',
        'forsythia': '#FFC801',
        'saffron':   '#FF9932',
        'nocturnal': '#114C5A',
        'oceanic':   '#172B36',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
