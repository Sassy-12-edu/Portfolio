import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      slate: {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
      },
      indigo: {
        '600': '#4f46e5',
      },
      amber: {
        '400': '#fbbf24',
      },
      hardware: {
        'black': '#080808',
        'dark': '#0e0e0e',
        'gray': '#161618',
        'accent': '#00f2ff',
        'magenta': '#ff00ea',
      }
    },
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'bounce-x': 'bounce-x 2s infinite',
        'reverse-spin': 'spin-reverse 15s linear infinite'
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' }
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' }
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
}

export default config
