module.exports = {
  stories: ["../src/components/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register"
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
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
