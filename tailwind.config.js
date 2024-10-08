/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color': {
          '01': '#16181d',
          '02': '#0D0E11',
          '03': '#878EA1',
          '04': '#2ECF0E',
          '05': '#292C34'
        },
      },
      fontFamily: {
        'poppins-400': ['Poppins Regular', 'sans-serif'],
        'poppins-500': ['Poppins Medium', 'sans-serif'],
        'poppins-600': ['Poppins Semi Bold', 'sans-serif'],
      }
      ,
      backgroundImage: {
        'intro' : "url(/src/assets/background-home.png)"
      },
      dropShadow: {
        '3xl': '2px 2px 4px #000'
      }
      ,
      keyframes: {
        'arrowFloat': {
          '0%': {bottom: '16px'},
          '50%': {bottom: '32px'},
          '100%':{bottom: '16px'}
        },
        'handWave': {
          '0%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(35deg)'},
          '100%':{transform: 'rotate(0deg)'}
        }
      },
      animation: {
        'arrowFloat': 'arrowFloat 1.5s linear infinite',
        'handWave': 'handWave 1.5s linear infinite'
      }
    },
  },
  plugins: [],
}