/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        darkTextColor : "hsl(229, 25%, 31%)",
        scoreTextColor : "hsl(229, 64%, 46%)",
        headerOutlineColor : "hsl(217, 16%, 45%)",
        
        scissorStartColor : "hsl(39, 89%, 49%)",
        scissorEndColor : "hsl(40, 84%, 53%)",
        paperStartColor : "hsl(230, 89%, 62%)",
        paperEndColor : "hsl(230, 89%, 65%)",
        rockStartColor : "hsl(349, 71%, 52%)",
        rockEndColor : "hsl(349, 70%, 56%)",

      },
      backgroundImage : {
        'triangle' : "url('/src/assets/triangle.svg')",
      }
    },
  },
  plugins: [],
}

