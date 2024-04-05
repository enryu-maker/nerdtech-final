/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins : "Poppins",
        MundoBold : "Mundo-Bold",
        MundoRegular : "Mundo-Regular",
        MundoI : "Mundo-I",

      }
    },
  },
  plugins: [],
});

