var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(woff2?|svg|eot|ttf)(\?v=\d\.\d\.\d)?$/,
        loaders: ['file-loader'],
        include: path.join(__dirname, 'src/fa')
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname,'src/scss'),
      path.resolve(__dirname,'src/bs'),
      path.resolve(__dirname,'src/components')
    ]
  }
};
