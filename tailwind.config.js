/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['AvenirNext', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
