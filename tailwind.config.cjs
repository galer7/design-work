/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        elsie: ["Elsie", "cursive"],
        norican: ["Norican", "cursive"],
      },
      screens: {
        "not-lg": { max: "1023px" },
      },
    },
  },
  plugins: [],
};
