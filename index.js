module.exports = {
  extends: [
    './base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  env: {
    'browser': true,
    'shared-node-browser': true,
  },
  rules: {},
};
