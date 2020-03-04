module.exports = {
  stories: ["../src/components/**/*.stories.jsx"],
  addons: ["@storybook/addon-knobs/register"],
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
      use: ["style-loader", "css-loader", "sass-loader"]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
