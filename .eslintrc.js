const allowedWords = require("./spellcheck.allowlist.js");

module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // slower but more powerful
    "prettier/@typescript-eslint", // disable eslint rules which conflict with prettier
    "plugin:prettier/recommended" // enables eslint-plugin-prettier and eslint-config-prettier. this will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "css-modules", "prettier", "spellcheck"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module", // allows for the use of imports
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  rules: {
    "css-modules/no-unused-class": [2, { camelCase: true }],
    "css-modules/no-undef-class": [2, { camelCase: true }],
    "prettier/prettier": "off", // don't complain about style, just silently fix it
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      // allow imports to leave off these extensions from the filenames
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }], // disallow jsx in .js or .ts files
    "react/prop-types": [2, { skipUndeclared: false }],
    "react/no-unused-prop-types": [2],
    "react/forbid-prop-types": [2],
    "react/require-default-props": [2, { forbidDefaultForRequired: true }],
    "react/default-props-match-prop-types": [2],
    "react/static-property-placement": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "capitalized-comments": [1, "never", { ignorePattern: "TODO" }],
    "spellcheck/spell-checker": [
      2,
      {
        skipWords: allowedWords,
        skipIfMatch: ["^http"]
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
      version: "detect"
    }
  }
};
