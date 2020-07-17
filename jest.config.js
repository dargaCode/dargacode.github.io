module.exports = {
  testMatch: ["**/?(*.)+(test.(ts|tsx))"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|png|svg)$": "<rootDir>/.jest/__mocks__/mockImage.js",
    "\\.(ttf|woff|woff2|pdf|docx)$": "<rootDir>/.jest/__mocks__/mockFile.js",
    "\\.(pdf|docx)$": "<rootDir>/.jest/__mocks__/mockDocument.js",
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(scss)$": "jest-transform-css"
  }
};
