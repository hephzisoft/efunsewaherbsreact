/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DMSans', 'sans-serif'],
        'unna':['Unna','serif']
    },
    colors: {
      primary: '#72BE18',
      card:'#F5F7F4'
  },
  backgroundImage:{
    'hero':"url('assets/images/bg-hero4.jpg')"
  },screens: {
    'sm': '360px',

    'md': '740px',

    'lg': '992px',
      },
   plugins: [],
  }
}}