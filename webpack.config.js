const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// для очистки папки dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js"
  },
  devtool: 'inline-source-map',
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.php$/,
        loader: 'file-loader',
        options: {
          name: 'php/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "css/style.css",
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};