const path = require('path')
// const ExternalsPlugin = require('webpack-externals-plugin')

module.exports = {
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
