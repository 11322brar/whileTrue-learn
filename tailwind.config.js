/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#000814',
        secondaryColor: '#161d29',
        textColor: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
