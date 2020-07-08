/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  optimization: {
    usedExports: true
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true // allow react routes to be directly navigable by users
  }
});
