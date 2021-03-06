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
    './rules/flow.js',
    './rules/eslint-comments',
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
        '**/*{.,_}{test,spec,stories,bench,fixture}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
      ],
      env: {
        'jest': true,
        'shared-node-browser': true,
      },
      rules: {
        // Reports modules without any exports, or with unused exports
        // https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
        'import/no-unused-modules': 'off',
      },
    },
  ],
};
