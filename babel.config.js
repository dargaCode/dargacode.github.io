module.exports = {
  // to support typescript, est has to transpile jest tests at runtime
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript"
  ]
};
