const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        }
      ]
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  }
};
