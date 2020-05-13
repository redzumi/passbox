/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../../build/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/index.html' }]),
    new ProgressBarPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      cache: true,
      uglifyOptions: {
        mangle: true
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../report.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: '../stats.json'
    })
  ]
};
/* eslint-enable */
