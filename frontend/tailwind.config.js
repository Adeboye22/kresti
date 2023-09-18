/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sm': { max: '600px' },
      // => @media (max-width: 640px) { ... }

      'md': { max:'768px' },
      // => @media (max-width: 768px) { ... }

      'lg': { max:'1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    colors:{
      "blue": "#1a1e49",
      "gray": "#38383b",
    },
    extend: {
      spacing:{
      "100": "30rem"
      }
    },
  },
  plugins: [],
});


