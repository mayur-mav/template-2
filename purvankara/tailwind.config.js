/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/**/*.js',
    './data/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        godrej: {
          emerald: '#0F382C',
          darkEmerald: '#09241C',
          gold: '#D4AF37',
          goldHover: '#B89628',
          sage: '#E8F0EC',
          mint: '#D1E4DB',
          offwhite: '#F9FAF9'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
};
