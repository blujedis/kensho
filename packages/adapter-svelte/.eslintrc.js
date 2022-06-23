module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: [
    '*.cjs',
    "rollup.config.js"
  ],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-vars': ['off', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-unused-vars': ['off', { ignoreRestSiblings: true }]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};




