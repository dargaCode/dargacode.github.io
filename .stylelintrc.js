module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier"
  ],
  rules: {
    "max-nesting-depth": [
      1,
      {
        ignore: ["pseudo-classes", "blockless-at-rules"],
        ignoreAtRules: ["include"]
      }
    ],
    "color-no-hex": true,
    "color-no-invalid-hex": true,
    "color-named": "never",
    "function-allowed-list": ["calc", "url", "format", "map-get", "local"] // no rgb colors
  }
};
