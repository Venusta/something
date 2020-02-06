/* eslint-disable */

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");
const isProduction = process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";

module.exports = {

  devServer: {
    contentBase: PATH_DIST,
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  entry: [
    path.join(PATH_SOURCE, "./index.jsx"),
  ],
  output: {
    path: PATH_DIST,
    filename: "js/[name].[hash].js",
  },

  resolve: {
    extensions: [".js", ".jsx"],
    mainFields: ["browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"],
            presets: [
              ["@babel/preset-env", {
                debug: false,
                useBuiltIns: "usage",
                corejs: 3,
              }],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, "./index.html"),
    }),
  ],
};
