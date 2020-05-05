module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  rules: {
    "color-no-hex": true,
    "color-no-invalid-hex": true,
    "color-named": "never",
    "function-whitelist": ["calc", "url"] // no rgb colors
  }
};
