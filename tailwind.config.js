
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        muli: ['Muli', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        frank: ['Frank Ruhl Libre', ...defaultTheme.fontFamily.serif],
        source: ['Source Serif Pro',  ...defaultTheme.fontFamily.serif],
        gilda: ['Gilda Display',   ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        '7xl': '4.65rem',
      },
    },
  },
  variants: {},
  plugins: []
}
