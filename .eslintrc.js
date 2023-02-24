module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base"
  ],
  rules: {
    semi: ["error", "never"]
  },
  ecmaFeatures: {
    jsx: true,
    experimentalObjectRestSpread: true
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react"
  ],
  // extends: [
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:prettier/recommended"
  // ]
};
