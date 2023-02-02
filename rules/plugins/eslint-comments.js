// Not maintained anymore, see https://github.com/mysticatea/eslint-plugin-eslint-comments/issues/72

module.exports = {
  plugins: [
    'eslint-comments',
  ],

  rules: {
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },
};
