/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e8',
          100: '#f9ecc4',
          200: '#f3d889',
          300: '#e8be4e',
          400: '#d4a429',
          500: '#c9971f',
          600: '#b07816',
          700: '#8d5914',
          800: '#764819',
          900: '#653c1b',
        },
        night: {
          50: '#eef1ff',
          100: '#d9dffe',
          200: '#bbc3fd',
          300: '#8c9afb',
          400: '#5b65f6',
          500: '#3b3ef2',
          600: '#2b20e7',
          700: '#2518c4',
          800: '#1a1270',
          900: '#0d0b3b',
          950: '#070520',
        },
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        ruqaa: ['Aref Ruqaa', 'serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'float-up': 'float-up var(--duration, 12s) var(--delay, 0s) infinite ease-in-out',
        'twinkle': 'twinkle var(--duration, 3s) var(--delay, 0s) infinite ease-in-out',
        'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
        'moon-glow': 'moon-glow 4s infinite ease-in-out',
        'heart-beat': 'heart-beat 2s infinite ease-in-out',
        'particle-drift': 'particle-drift var(--duration, 8s) var(--delay, 0s) infinite ease-out',
      },
      keyframes: {
        'float-up': {
          '0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20vh) scale(1)', opacity: '0' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(201,151,31,0.4))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(201,151,31,0.8))' },
        },
        'moon-glow': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(201,151,31,0.3), 0 0 80px rgba(201,151,31,0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(201,151,31,0.5), 0 0 120px rgba(201,151,31,0.25)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1)' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) translateX(50px) rotate(360deg)', opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
