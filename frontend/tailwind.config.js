/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      "blue": "#1a1e49",
      "gray": "#38383b",
      "black": "#000000",
      "white": "#ffffff"
    },
    extend: {
      spacing:{
      "100": "30rem"
      }
    },
  },
  plugins: [],
});

