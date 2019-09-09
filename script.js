module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  env: {
    'node': true,
    'shared-node-browser': false,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'no-console': 'off',
  },
};
