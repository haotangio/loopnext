require('dotenv').config()
if (process.env.NODE_ENV === 'production') {
  // process.env.webpackAssets = JSON.stringify(
  //   require('./dist/client/manifest.json'))
  // process.env.webpackChunkAssets = JSON.stringify(
  //   require('./dist/client/chunk-manifest.json'))
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js')
} else {
  // Babel polyfill to convert ES6 code in runtime.
  require('babel-register')({
    presets: [
      'es2015',
      'stage-0'
    ]
  })
  require('babel-polyfill')
  require('./server/server').boot()
}
