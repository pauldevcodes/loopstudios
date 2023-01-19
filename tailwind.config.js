/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 55%)',
      veryDarkGray: 'hsl(0, 0%, 41%)'
    },
    extend: {},
  },
  plugins: [],
}
