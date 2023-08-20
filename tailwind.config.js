/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        'picton-blue': '#29B2EC',
        'picton-blue-light':'#61D2FC',
        'picton-blue-dark':'#0590D1',
        'picton-blue-darkest':'#0478B2',
        
        'deluge': '#8370B7',
        'deluge-light':'#9E8ED2',
        'deluge-dark': '#705BA3',
        'deluge-dark-shade':'#5E498C',

         'gallery': '#EEECEE',
         'gallery-light': '#ffffff',
         'gallery-dark' : '#C8C5C8',
         'gallery-dark-shade':"#A39FA3"
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/assets/hero-bg.png')",
        'service-bg':"url('/assets/service-bg.jpg')"
      }
    },
  },
  plugins: [],
}