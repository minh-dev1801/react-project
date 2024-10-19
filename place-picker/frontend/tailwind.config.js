/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        logo: "0 0 8px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        "slide-up-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(3rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-up-fade-in": "slide-up-fade-in 0.3s ease-out forwards",
      }
    },
  },
  plugins: [],
};
