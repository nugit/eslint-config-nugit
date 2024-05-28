module.exports = {
  extends: [
    './base',
    './rules/plugins/react',
    './rules/plugins/react-hooks',
    './rules/plugins/react-a11y',
  ].map(require.resolve),
  env: {
    'browser': true,
    'es2023': true,
    'shared-node-browser': true,
  },
  rules: {},
};
