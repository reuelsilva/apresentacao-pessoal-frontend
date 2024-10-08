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
          '03': '#878EA1'
        },
      },
      fontFamily: {
        'poppins-500': ['Poppins Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}