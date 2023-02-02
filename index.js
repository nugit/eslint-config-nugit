module.exports = {
  extends: [
    './base',
    './rules/plugins/react',
    './rules/plugins/react-hooks',
    './rules/plugins/react-a11y',
  ].map(require.resolve),
  env: {
    'browser': true,
    'shared-node-browser': true,
  },
  rules: {},
};
