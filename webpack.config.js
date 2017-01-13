'use strict';

const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: './bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {test: /\.scss?$/, loaders: ['style', 'css', 'sass']},
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file'
      }
    ]
  }
};
