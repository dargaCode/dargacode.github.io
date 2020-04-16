module.exports = {
  plugins: ["transform-class-properties"],
  // to support typescript, jest has to transpile tests at runtime
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript"
  ]
};
