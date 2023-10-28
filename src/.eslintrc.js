module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  plugins: ['prettier'],
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
