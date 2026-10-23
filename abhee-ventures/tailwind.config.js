/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: "#163A52",
          darkEmerald: "#102A3B",
          gold: "#087FAF",
          goldHover: "#06658C",
          sage: "#D9EAF2",
          mint: "#E7F6FC",
          offwhite: "#F5FAFC",
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
