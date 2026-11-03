/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: "#0B1E36",
          darkEmerald: "#071526",
          gold: "#D4AF37",
          goldHover: "#B89628",
          sage: "#DCE5EF",
          mint: "#EEF4FA",
          offwhite: "#FAF9F5",
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
