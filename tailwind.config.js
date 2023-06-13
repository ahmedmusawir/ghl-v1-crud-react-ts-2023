/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moose: "grey",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("daisyui"),
    require("flowbite/plugin"),
  ],
  daisyui: {
    // themes: ['cupcake', 'dark', 'cmyk'],
    styled: true,
    themes: false,
    rtl: false,
  },
};
