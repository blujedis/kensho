module.exports = {
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
    "plugin:react-hooks/recommended",
    'prettier',
  ],
  "plugins": [
    "react", "react-hooks", "@typescript-eslint", "prettier"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
  settings: {
    react: {
      version: 'latest'
    },
    "import/resolver": {
      "typescript": {}
    }
  }
};
