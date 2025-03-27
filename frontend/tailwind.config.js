/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ecomm-purple": "#800080", // Corrected hex format
      }
    },
  },
  plugins: [],
}
