module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/extensions': [0, { '<js>': 'always' }],
    'no-plusplus': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
