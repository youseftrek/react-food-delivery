/** @type {import('tailwindcss').Config} */
/* eslint-disable */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
