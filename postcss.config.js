
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({ stage: 0 }),
    require('tailwindcss'),
    require('postcss-easings'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
})