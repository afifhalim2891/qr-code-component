/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit','sans-serif'],
      },
      colors:{
      'lightGray':'hsl(0, 0%, 100%)',
      'grayishBlue': 'hsl(212, 45%, 89%)',
      'darkBlue':'hsl(218, 44%, 22%)'
    },},
  },
  plugins: [],
}


