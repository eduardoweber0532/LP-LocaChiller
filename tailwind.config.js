
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'institutional-blue': '#366569',
        'institutional-orange': '#f58220',
      },
    },
  },
  plugins: [],
}
