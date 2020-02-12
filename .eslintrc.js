const whitelistedWords = require("./spellcheck.whitelist.js");

module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // slower but more powerful
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "prettier", "spellcheck"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  rules: {
    "prettier/prettier": "off", // don't complain about style, just silently fix it
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }], // disallow jsx in js or ts files
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages", // allow imports to leave off these extensions from the filenames
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/prop-types": [2, { skipUndeclared: false }],
    "react/no-unused-prop-types": [2],
    "react/forbid-prop-types": [2],
    "react/require-default-props": [2, { forbidDefaultForRequired: true }],
    "react/default-props-match-prop-types": [2],
    "spellcheck/spell-checker": [
      2,
      {
        skipWords: whitelistedWords
      }
    ]
  },
  env: {
    browser: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.common.js"
      }
    },
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
