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
        ink: '#211816',
        plum: '#7f1d4e',
        coral: '#e85d75',
        marigold: '#f2b84b',
        mint: '#dff3e4',
        sage: '#3f7c6b',
        clay: '#b46a55',
        ivory: '#fffaf2',
        pearl: '#fff4ef',
      },
      boxShadow: {
        halo: '0 30px 90px rgba(127, 29, 78, 0.22)',
        soft: '0 18px 50px rgba(33, 24, 22, 0.13)',
        crisp: '0 18px 0 rgba(33, 24, 22, 0.08)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 1.9s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 93, 117, 0.35)' },
          '50%': { boxShadow: '0 0 0 16px rgba(232, 93, 117, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
