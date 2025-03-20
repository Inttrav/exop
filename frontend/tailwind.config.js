/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'coin-fall': 'coin-fall 2s ease-in-out forwards',
        'coin-rotate': 'coin-rotate 0.5s ease-in-out forwards',
        'star-shimmer': 'star-shimmer 2s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 3s ease-in-out infinite',
        'float-3d': 'float-3d 6s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 6s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float-up': 'float-up 4s ease-in-out infinite',
        'float-down': 'float-down 4s ease-in-out infinite',
        'scale': 'scale 2s ease-in-out infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'coin-fall': {
          '0%': { transform: 'translate(0, 0) rotateX(0deg)' },
          '20%': { transform: 'translate(0, 0) rotateX(0deg)' },
          '100%': { transform: 'translate(0, calc(100vh - 120px)) rotateX(720deg)' }
        },
        'coin-rotate': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(1.2)',
            opacity: 0
          }
        },
        'twinkle': {
          '0%, 100%': { 
            filter: 'brightness(0.8) drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))'
          },
          '50%': { 
            filter: 'brightness(1.2) drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))'
          }
        },
        'star-shimmer': {
          '0%, 100%': { 
            filter: 'brightness(0.7) drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))'
          },
          '50%': { 
            filter: 'brightness(1.3) drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: 0.5, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-10px)' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '50%': { transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '50%': { transform: 'rotateX(10deg) rotateY(10deg)' },
          '100%': { transform: 'rotateX(0) rotateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(59, 130, 246, 0.5)' },
          '50%': { borderColor: 'rgba(59, 130, 246, 1)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      animationDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
} 