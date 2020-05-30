module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]"
          },
          localsConvention: "dashesOnly"
        }
      }
    },
    "@storybook/preset-typescript",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register"
  ]
};
