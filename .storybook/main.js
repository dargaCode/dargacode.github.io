module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  }
};
