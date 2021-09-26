postcssimport = require('postcss-import'),
tailwindcss = require('tailwindcss'),
autoprefixer = require('autoprefixer'),
purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    postcssimport,
    tailwindcss,
    autoprefixer,
    purgecss({ content: ['./**/*.html'] })
  ]
}
