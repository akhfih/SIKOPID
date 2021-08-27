/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    /* HTML Webpack Plugin */
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Load css to separate file
          { loader: MiniCssExtractPlugin.loader },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      /* babel loader */
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
