/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: "#8B1D24",
          darkEmerald: "#5C0E14",
          gold: "#C5A059",
          goldHover: "#A8833B",
          sage: "#E8D5D7",
          mint: "#FAECEE",
          offwhite: "#FCFBFB",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
