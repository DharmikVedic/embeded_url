/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c_yellow: "#FAE8BC",
        c_light_dark: "#2C2B46",
      },
      fontFamily: {
        sans: ["janson_regular", ...defaultTheme.fontFamily.sans],
        serif: ["janson_regular", ...defaultTheme.fontFamily.serif],
        nunito: ["Nunito Sans", "sans-serif"],
        janson_bold: ["janson_bold", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        zodiac: ["zodiac", "sans-serif"],
      },
    },
  },
  plugins: [],
};
