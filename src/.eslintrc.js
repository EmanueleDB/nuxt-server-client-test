module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': 2,
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
      },
    ],
    'import/named': 'off',
  },
}
