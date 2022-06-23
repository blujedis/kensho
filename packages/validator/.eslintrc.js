module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ["prettier", 'plugin:@typescript-eslint/recommended'],
  rules: {
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  env: {
    node: true
  },
  "ignorePatterns": [
    "rollup.config.js"
  ]
};
