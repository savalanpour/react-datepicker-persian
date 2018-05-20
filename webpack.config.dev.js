const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './docs/preview/index.html',
  filename: './index.html',
  inject:'false'
})

module.exports = {
  entry: './docs/src/boot.js',
  output: {
    path: path.resolve(__dirname, 'docs/preview'),
    libraryTarget: 'umd',
    filename: 'demo_bundles.js',
    library: 'react-datepicker-fa'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}