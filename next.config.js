const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  // Allow for creation of style sheet for Styled Components
  [withCSS, {
    cssModules: false
  }],
])
