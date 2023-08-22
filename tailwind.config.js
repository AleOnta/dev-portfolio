/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "536px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "main-gray": "#455262",
        "blueish-gray": "#404952",
        "smooth-gray": "rgba(211, 211, 211, 0.13)",
        "absolute-gray": "#484869d8",
        "smooth-black": "rgba(0, 0, 0, 0.3)",
        "gun-metal": "#282d33",
        "custom-charcoal": "#404952",
        "blueish-charcoal": "#455262",
        "li-gray": "#95a3a4",
        "snow-white": "#efefef",
      },
      fontFamily: {
        titles: ["Inter", "sans-serif"],
        body: ["Roboto Flex", "sans-serif"],
        custom: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
