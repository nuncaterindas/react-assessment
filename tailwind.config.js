/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-desktop': "url('/assets/bg-intro-desktop.png')",
        'intro-mobile': "url('/assets/bg-intro-mobile.png')",
      },
      fontFamily:{
        body:["Poppins"]
      },
      colors: {
        'primary-red':'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 77%)',
        "light-green":' hsl(154, 59%, 70%)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
       'custom-shadow' :'0 4px 6px rgba(0, 0, 0, 5)'    
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      minWidth: {
        'mobile': '375px',
      }
    },
  },
  plugins: [],
}

