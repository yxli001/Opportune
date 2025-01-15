/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00629B",
        background: "#FBFBFB",
        accent: {
          pink: "#D462AD",
          blue: "#00C6D7",
        }
      }
    },
  },
  plugins: [],
};

export default tailwindConfig;
