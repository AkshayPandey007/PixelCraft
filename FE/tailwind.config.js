/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        robotoFlex: ['"Roboto Flex"', 'sans-serif'],
        hind: ['"Hind"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

