/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

const WriteFilePlugin = require('write-file-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new WriteFilePlugin(),
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([{ from: 'src/index.html' }])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../../build'),
    compress: true,
    disableHostCheck: true,
  },
}
/* eslint-enable */
