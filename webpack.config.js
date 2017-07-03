var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'App'),
  entry: {
    client: './client/main'
  },
  output: {
    path: path.join(__dirname, 'wwwroot/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ]
      }
    ],
    // loaders: [
    //   // Transform JSX in .jsx files
    //   { test: /\.jsx$/, loader: 'babel-loader' }
    // ],
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['.js', '.jsx']
  },
  devtool: "cheap-eval-source-map"
};
