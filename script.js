module.exports = {
  env: {
    node: true,
    'shared-node-browser': false,
  },
  extends: ['./base'].map(require.resolve),
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
