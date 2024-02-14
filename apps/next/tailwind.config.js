const { theme } = require("@frontend/design-system/dist/cjs/tailwind/theme");
const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    path.join(path.dirname(require.resolve("@frontend/design-system")), "**/*.{js,jsx,ts,tsx}"),
    path.join(path.dirname(require.resolve("@frontend/home")), "**/*.{js,jsx,ts,tsx}"),
  ],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  theme: {
    ...theme,
  },
};
