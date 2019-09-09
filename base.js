module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/ramda.js',
    './rules/flow.js',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    'shared-node-browser': true,
  },
  rules: {},
  overrides: [
    {
      files: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec,stories,bench}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
      ],
      env: {
        'jest': true,
        'shared-node-browser': true,
      },
    },
  ],
};
