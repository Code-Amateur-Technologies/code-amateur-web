/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // color theme
        violet: '#7b01f7',
        celestialblue: "#0099F7",
        electricblue: "#81F0FF",
        nonphotoblue: "#7ed4e0",
        moonstone: "#00AFC7",
        gunmetal: "#253237",
        raisinblack: "#252436",
        spacecadet: "#2E2D42"
      }
    },
  },
  plugins: [],
}