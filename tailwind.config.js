/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bellroy-brown': '#3C2A21',
        'bellroy-tan': '#F5F5DC',
        'bellroy-orange': '#FF5733',
      }
    },
  },
  plugins: [],
}