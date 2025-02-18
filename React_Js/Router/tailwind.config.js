/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#5C7285",   // Slate Blue
        customOlive: "#818C78",  // Olive Gray
        customSage: "#A7B49E",   // Soft Sage
        customBeige: "#E2E0C8",  // Pale Sand
      },

      keyframes: {
        borderGlow: {
          "0%": { borderColor: "#A7B49E" },  // Soft Sage
          "50%": { borderColor: "#E2E0C8" }, // Pale Sand
          "100%": { borderColor: "#818C78" }, // Olive Gray
        },
      },
      animation: {
        borderGlow: "borderGlow 3s infinite alternate",
      },
    },
  },
  plugins: [],
};


