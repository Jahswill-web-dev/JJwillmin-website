/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    screens: {
      'lg': '1000px',
      // => @media (min-width: 992px) { ... }
    },
    colors: {
    primary: '#1E2A40',
    secondary: '#BE183E',
    // ...
  }
  },
  
  },
  plugins: [],
}