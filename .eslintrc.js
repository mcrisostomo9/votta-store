module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
  env: {
    browser: true,
    mocha: true,
    es6: true,
    node: true,
  },
  plugins: ["jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    strict: 0,
    "react/prop-types": 0,
    "no-unused-vars": 1,
  },
}
