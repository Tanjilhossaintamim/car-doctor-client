/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "'Inter', sans-serif"
      },
      colors: {
        'color-dark-1': "#151515",
        'color-dark-2': "#444",
        'color-dark-3': "#737373",
        'color-dark-6': "#E8E8E8",
        'color-dark-7': "#2D2D2D",
        'color-dark-8': "#F3F3F3",
        'color-gray': "#A2A2A2",
        'color-orange': "#FF3811",
      }
    },
  },
  plugins: [],
}

