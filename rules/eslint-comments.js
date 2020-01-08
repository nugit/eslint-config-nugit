module.exports = {
  plugins: [
    'eslint-comments',
  ],

  rules: {
    // Disallow duplicate eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
    'eslint-comments/no-duplicate-disable': 'error',

    // Disallow eslint-disable comments without rule names
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
    'eslint-comments/no-unlimited-disable': 'error',

    // Disallow unused eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-disable': 'error',

    // Disallow unused eslint-enable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-enable': 'error',
  },
};
