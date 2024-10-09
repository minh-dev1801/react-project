/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #e781fb 40%, #8e76fa 60%)",
        "custom-quiz": "linear-gradient(180deg, #3e2a60 0%, #321061 100%)",
        "custom-summary": "linear-gradient(180deg, #a17eda 0%, #895fc4 100%)",
      },
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
      dropShadow: {
        custom: "0 0 4px rgba(0, 0, 0, 0.6)",
        "custom-summary": "0 0 4px rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        "custom-quiz": "1px 1px 8px 4px rgba(12, 5, 32, 0.6)",
        "custom-summary": "1px 1px 8px 1px rgba(0, 0, 0, 0.6)",
      },
      textColor: {
        "custom-text-answer": "#c1b2dd",
        "custom-text-summary": "#3a2353",
        "custom-text-summary-content": "#191321",
      },
      backgroundColor: {
        "custom-bg-answer": "#6cb7f5",
        "custom-hover-bg-answer": "#9d5af5",
      },
    },
  },
  plugins: [],
};
