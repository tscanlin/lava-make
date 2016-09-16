var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  // postcss: function () {
  //   return [precss, autoprefixer];
  // }
};
