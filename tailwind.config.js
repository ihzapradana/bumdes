/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pemkab': "url('../src/assets/img-bg.svg')",
        
      }
    },
  },
  plugins: [],
}