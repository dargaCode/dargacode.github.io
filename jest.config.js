module.exports = {
  testMatch: ["**/?(*.)+(test.(ts|tsx))"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|png|svg)$": "<rootDir>/.jest/__mocks__/imageMock.js",
    "\\.(ttf|woff|woff2)$": "<rootDir>/.jest/__mocks__/fileMock.js",
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(scss)$": "jest-transform-css"
  }
};
