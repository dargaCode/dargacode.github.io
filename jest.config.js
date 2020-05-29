module.exports = {
  testMatch: ["**/?(*.)+(spec|test|jest).[tj]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|png|svg)$": "<rootDir>/.jest/__mocks__/imageMock.js",
    "\\.(ttf|woff|woff2)$": "<rootDir>/.jest/__mocks__/fileMock.js",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(scss)$": "jest-transform-css"
  }
};
