
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-easings'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
})