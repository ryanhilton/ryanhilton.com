const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: './assets/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
        loader: "html-loader",
        options: { minimize: false }
      }]
      },
      // {
      //   test: /\.(png|jpe?g|svg|gif)/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "./assets/img/[name].[ext]"
      //         //limit: 10000
      //       }
      //     },
      //     {
      //       loader: "img-loader"
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./assets/img/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "./assets/[name].[ext]"
            },
          }
        ]
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "env"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/styles.css",
      //chunkFilename: "[id].css"
    })
  ]
};