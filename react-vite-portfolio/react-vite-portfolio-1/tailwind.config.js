/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway':['Raleway'],
        'poppinsSB':['poppinssemibold'],
      },
      backgroundImage: theme => ({
        'hero': "url('./src/assets/img/bg-hero.jpg')",
      })
    },
  },
  plugins: [],
}

