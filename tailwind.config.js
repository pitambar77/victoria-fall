/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React files
  ],
  theme: {
    extend: {
        fontFamily: {
        avenir: ["Avenir Light", Helvetica, Arial, sans-serif ],
        primary: ["Avenir Bold", Helvetica, Arial, sans-serif ],
      },
    },
  },
  plugins: [],
};
