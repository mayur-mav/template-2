/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: "#1E3A8A",
          darkEmerald: "#132038",
          gold: "#E25B26",
          goldHover: "#C34412",
          sage: "#DBEAFE",
          mint: "#EFF6FF",
          offwhite: "#FAFAFA",
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
