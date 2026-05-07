/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        berry: '#9f1239',
        rosewood: '#4c0519',
        blush: '#fff1f2',
        champagne: '#fff7ed',
        tealink: '#0f766e',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(159, 18, 57, 0.2)',
        soft: '0 18px 50px rgba(76, 5, 25, 0.14)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 1.9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(244, 63, 94, 0.35)' },
          '50%': { boxShadow: '0 0 0 16px rgba(244, 63, 94, 0)' },
        },
      },
    },
  },
  plugins: [],
};
