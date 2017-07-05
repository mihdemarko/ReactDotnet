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
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: "cheap-eval-source-map"
};
