/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // when not overriding filename, can delete this entire array
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: false
    }),
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "404.html" // hack to allow navigation to routes, since GitHub doesn't support 200.html
    }),
    new HtmlWebpackRootPlugin(),
    new MiniCssExtractPlugin()
  ]
});
