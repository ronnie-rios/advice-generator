/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4e5d73',
        'dark-gray': '#323a49',
        'dark-blue': '1f2632',
        'cyan': '#cee3e9',
        'green': '#52ffa8'
      }
    },
  },
  plugins: [],
}
