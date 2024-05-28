module.exports = {
  env: {
    'es2023': true,
    'node': true,
    'shared-node-browser': false,
  },
  extends: [
    './base',
  ].map(require.resolve),
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/no-unused-modules': 'off',
    'no-console': 'off',
  },
};
