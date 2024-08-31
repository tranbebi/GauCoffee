/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karlar:['kalar', 'sans-serif']
      },
      colors: {
        'light-coffee':'#C89F94',
        'light-coffee2':'#BCBAB8'

      },
      keyframes: {
        sliderDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation:{
        sliderDown:'sliderDown .6s ease-in-out',
      }
    },
  },
  plugins: [],
}

