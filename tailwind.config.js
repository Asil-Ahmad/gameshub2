const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  //
  theme: {
    extend: {},
  },

  plugins: [require("tailwindcss-animated")],
  darkMode: "class",

  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"],
      marcellus: ["Marcellus", "serif"],
      manrope: ["Manrope", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      "sand-yellow": "#48413C",
    },
  },
});
