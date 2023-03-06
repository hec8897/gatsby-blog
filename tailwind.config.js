/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "414px",
      md: "767px",
      lg: "1024px",
    },
  },
  plugins: [],
};
