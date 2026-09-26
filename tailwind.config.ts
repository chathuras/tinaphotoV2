import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#292425',
        cream: '#fffaf8',
        blush: '#f7e9e6',
        rose: '#d98b86',
        brand: '#c9161d',
        muted: '#74696b'
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(64, 39, 42, .10)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
export default config
