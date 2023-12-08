/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "f-outfit":'Outfit'
      },
      colors:{
        "d-blue":"#030E39",
        "blue":"#1F0969",
        "yellow":"#FFC427",
        "t-blue":"#080D42",
        "purple":"rgb(91, 25, 167)",
        "light-gray":"#707070"
      },
      theme:{
        'xsm': {'max': '300px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
      }
    },
  },
  plugins: [],
}