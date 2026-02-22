/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: 'Poppins',
        MundoBold: 'Mundo-Bold',
        MundoRegular: 'Mundo-Regular',
        MundoI: 'Mundo-I',
      },
      colors: {
        primary: '#0EA5E9',
        secondary: '#8B5CF6',
        accent: '#F43F5E',
        'slate-950': '#020617',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
});

