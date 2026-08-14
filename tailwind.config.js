/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          green: '#00ff66',
          emerald: '#10b981',
          orange: '#ff5500',
          amber: '#f97316',
        },
        dark: {
          bg: '#07080c',
          surface: '#0d0f17',
          card: '#131624',
          border: '#1f2538',
          hover: '#1b2033',
        }
      },
      boxShadow: {
        'glow-green': '0 0 25px -3px rgba(0, 255, 102, 0.4), 0 0 10px -2px rgba(0, 255, 102, 0.2)',
        'glow-orange': '0 0 25px -3px rgba(255, 85, 0, 0.4), 0 0 10px -2px rgba(255, 85, 0, 0.2)',
        'glow-strong-green': '0 0 50px -5px rgba(0, 255, 102, 0.6)',
        'glow-strong-orange': '0 0 50px -5px rgba(255, 85, 0, 0.6)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
