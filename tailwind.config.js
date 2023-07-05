/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-gray": "#455262",
        "blueish-gray": " #404952",
      },
      fontFamily: {
        titles: ["Karla", "cursive"],
        body: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
};
