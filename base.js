module.exports = {
  extends: [
    './rules/node',
    './rules/plugins/imports',
    './rules/plugins/flow',
    // './rules/plugins/eslint-comments',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
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
