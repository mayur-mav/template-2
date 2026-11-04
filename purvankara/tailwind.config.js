/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: "#0D3559",
          darkEmerald: "#082138",
          gold: "#C5A059",
          goldHover: "#A8833B",
          sage: "#D5E2EC",
          mint: "#EEF4F8",
          offwhite: "#F8FAFC",
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
