/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starwars: {
          dark: '#000000',
          light: '#ffffff',
          primary: '#feda4a',
          secondary: '#c1c1c1',
        },
      },
      fontFamily: {
        starwars: ['"Star Jedi"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

