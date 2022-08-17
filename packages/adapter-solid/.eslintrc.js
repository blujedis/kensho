module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
  ],
  "plugins": [
    "@typescript-eslint", "prettier"
  ],
  rules: {
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  },
  "ignorePatterns": [
    "rollup.config.js"
  ]
};