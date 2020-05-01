const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module:{
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtraPlugin.loader, 'css-loader','sass-loader', 'postcss-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name: 'images/[name].[ext]',
              esModule: false
            }
          },
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtraPlugin({
      filename: 'main.css'
    })
  ]
};