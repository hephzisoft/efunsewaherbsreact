/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
    },
    colors: {
      primary: '#72BE18'
  },
  backgroundImage:{
    'hero':"url('assets/images/bg-hero1.jpg')"
  },screens: {
    'sm': '360px',

    'md': '768px',

    'lg': '992px',
      },
   plugins: [],
  }
}}