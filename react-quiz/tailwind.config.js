/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #e781fb 40%, #8e76fa 60%)",
      },
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
      dropShadow: {
        custom: "0 0 4px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
