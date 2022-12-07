/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BFBFC1",
        secondary: "#7D6B8A",
        third: "#24505D",
        fourth: "#DADADC",
        five: "#031a70",
      },

      fontFamily: {
        primaryFont: ["Noto Sans Mende Kikakui", "sans-serif"],
        boldFont: ["Nerko One", "cursive"],
        headFont: ["Patrick Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
