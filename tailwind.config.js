/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        50: "#F0F8FF",
        100: "#E1F0FF",
        200: "#B3D8FF",
        300: "#85C0FF",
        400: "#58A9FF",
        500: "#006FEE",
        600: "#005ED3",
        700: "#004CB7",
        800: "#003A9C",
        900: "#002980",
        950: "#001A66",
      },
      purple: {
        50: "#F5F0FF",
        100: "#EDE1FF",
        200: "#D4B3FF",
        300: "#BB85FF",
        400: "#A258FF",
        500: "#8926ED",
        600: "#751FCC",
        700: "#6118AA",
        800: "#4C1289",
        900: "#380C67",
        950: "#240645",
      },
      gray: {
        900: "#f2f2f2",
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
