import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fdf6',
          100: '#d8fbe2',
          200: '#b4f4c2',
          300: '#7fe59b',
          400: '#46d670',
          500: '#21b84f',
          600: '#14903d',
          700: '#117435',
          800: '#125e2f',
          900: '#104d2a'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 45px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
} satisfies Config;
