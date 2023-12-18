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
        "light-gray":"#707070",
        "gray":"#DDDDDD",
        "extl-gray":"#FAF9FE",
        "plan-gray":"#F3F3F3",
        "sky":"#0088C1"
      },
      screens: {
        'sm':'400px'
      }
  
    },
  },
  plugins: [],
}