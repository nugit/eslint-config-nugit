module.exports = {
  extends: [
    './rules/plugins/react',
    './rules/plugins/react-hooks',
    './rules/plugins/react-a11y',
    './base',
  ].map(require.resolve),
  env: {
    browser: true,
    'shared-node-browser': true,
  },
  rules: {},
};
