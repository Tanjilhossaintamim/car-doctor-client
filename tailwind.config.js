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
        'color-dark-2': "#444",
        'color-orange': "#FF3811",
      }
    },
  },
  plugins: [],
}

