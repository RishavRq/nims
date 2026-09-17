/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#1a1f2e',
        'night-deep': '#12151f',
        ink: '#2d2d2d',
        'ink-soft': '#5a5a5a',
        'ink-faint': '#8a8a8a',
        paper: '#f4f0e8',
        'paper-dim': '#e8e2d6',
        'paper-dark': '#d4cec2',
        forest: '#4a5d4a',
        wine: '#6b3a3a',
        rose: '#b8908a',
        amber: '#c9a96e',
        mist: '#8a9aaa',
        dawn: '#d4c4a8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['EB Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-slow': 'fadeIn 3s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
