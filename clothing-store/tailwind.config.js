/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand": "#edbf68",
        "sub-brand": "#a59b8b",
        "sub-2-brand": "#5f4e33",
        "sub-3-brand": "#d1b68b",
        "sub-4-brand": "#f4b115",
      },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(20rem, 1fr))",
      }
    },
  },
  plugins: [],
}