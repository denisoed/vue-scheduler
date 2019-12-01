module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'no-bitwise': 0,
    'indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      'props': false
    }],
    'max-len': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'import/extensions': ['error', 'never', {
      'packages': 'never',
      'json': 'always'
    }],
    'no-floating-decimal': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': 0,
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': 'off',
    'no-extra-semi': 'error',
    'import/no-dynamic-require': 0,
    'new-cap': ['error', {
      "newIsCap": false,
      'properties': false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
