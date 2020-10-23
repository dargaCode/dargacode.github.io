/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesWebpackPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    // TODO add aliases here for /components/, /src/, to remove need for lots of /../
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "ts-loader",
        options: {
          // disable type checker - typecheck will happen via eslint
          transpileOnly: true
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
              // replace kebab-case css class names with camelCase strings
              // so they can keep their conventions in both css and js
              localsConvention: "dashesOnly"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf|docx)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:base64:5].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/img/favicons", to: "img/favicons" },
        { from: "src/img/social", to: "img/social" }
      ]
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: false
    }),
    new HtmlWebpackPlugin({
      title: "dargaCode - Darga Darga Programmer Portfolio",
      template: "src/template.html"
    }),
    new HtmlWebpackRootPlugin(),
    new CnameWebpackPlugin({
      domain: "dargacode.com"
    }),
    new MiniCssExtractPlugin(),
    new MomentLocalesWebpackPlugin()
  ]
};
