/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08080A',
        surface: '#0F0F12',
        surface2: '#15151A',
        border: {
          DEFAULT: '#212126',
          strong: '#2E2E35',
        },
        ink: {
          DEFAULT: '#F4F4F3',
          muted: '#9C9CA4',
          dim: '#65656C',
        },
        accent: {
          DEFAULT: '#F2A33C',
          soft: '#F2A33C1F',
          dim: '#B9762A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(242,163,60,0.15), 0 0 40px -8px rgba(242,163,60,0.35)',
        'glow-lg': '0 0 80px -20px rgba(242,163,60,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 1s step-end infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
