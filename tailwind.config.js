/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'gray': '#3A3F47', 
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
