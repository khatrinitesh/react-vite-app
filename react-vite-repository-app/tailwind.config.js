/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontbaskerville:'baskerville',
      },
      fontSize:{
        'fsheadtitle':['clamp(30px, 2.5vh, 40px)', '1.6'],
        'fs16': ['clamp(16px, 1.6vh, 20px)', '1.6'],
      }
    },
  },
  plugins: [],
}