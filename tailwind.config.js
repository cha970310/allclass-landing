/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
             "./components/**/*.{js,ts,jsx,tsx}",],
  theme: { 
  //   colors: {
  //   transparent: 'transparent',
  //   current: 'currentColor',
  //   'white': '#ffffff',
  //   'purple': '#3f3cbb',
  //   'midnight': '#121063',
  //   'metal': '#565584',
  //   'tahiti': '#3ab7bf',
  //   'silver': '#ecebff',
  //   'bubble-gum': '#ff77e9',
  //   'bermuda': '#78dcca',
  //   'allclass':'#396653',
  // },
    extend: {
      colors:{
        'allclass':'#396653',
      }

    },
  },
  darkMode:'class',
  plugins: [],
}
