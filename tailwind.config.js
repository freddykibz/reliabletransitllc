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
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
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
         'gallery-dark-shade':"#A39FA3",
         "slate-gray": "#6D6D6D",
      },
      backgroundImage: {
        'pattern-bg': "url('/pattern.png')",
        'hero-bg': "url('/assets/hero-bg.png')",
        'service-bg':"url('/assets/service-bg.jpg')",
        'contact-bg':"url('/assets/contact.jpg')",
        'heroside-bg':"url('/assets/bg-heroside.png')"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}