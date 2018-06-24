const copy = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx']
  },
  output: {
    path: __dirname +'/dist',
    publicPath:'/',
    filename:'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new copy([{from:'static',to:'static'}])
  ],
  devServer: {
    contentBase:"./dist",
    hot: true
  }
};