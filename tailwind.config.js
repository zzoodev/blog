/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["Roboto", "Noto Sans KR", "sans-serif"],
      },
    },
    screens: {
      mobile: "480px",
      base: "672px",
    },
  },
  plugins: [],
};
