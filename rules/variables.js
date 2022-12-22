const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
