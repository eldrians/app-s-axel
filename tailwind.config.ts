/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteApp: "#FEFEFE",
        darkApp: "#2F313F",
        lightGreyApp: "#ebecee",
        greenApp: "#26A668",
        darkGreenApp: "#1F8252",
        redRagdalion: "#DC3F36",
        blueRagdalion: "#1EBBD6",
        yellowRagdalion: "#F1910C",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
      backgroundImage: {
        "hero": "url('/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
