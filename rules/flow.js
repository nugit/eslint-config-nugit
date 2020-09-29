module.exports = {
  parser: 'babel-eslint',

  plugins: [
    'flowtype',
  ],

  // View link below for flow rules documentation
  // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules
  rules: {
    'flowtype/array-style-complex-type': ['error', 'verbose'],
    'flowtype/array-style-simple-type': ['error', 'shorthand'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'warn',
    'flowtype/delimiter-dangle': ['error', 'always-multiline', 'always-multiline', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/newline-after-flow-annotation': ['error', 'always'],
    'flowtype/no-mixed': 'off',
    // TODO: enable?
    'flowtype/no-existential-type': 'off',
    'flowtype/no-flow-fix-me-comments': 'off',
    'flowtype/no-mixed': 'off',
    // TODO: enable?
    'flowtype/no-mutable-array': 'off',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/no-unused-expressions': 'error',
    // TODO: disable any?
    'flowtype/no-weak-types': ['error', { any: false }],
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-compound-type-alias': ['error', 'always'],
    'flowtype/require-exact-type': 'off',
    'flowtype/require-indexer-name': 'off',
    'flowtype/require-inexact-type': 'off',
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-readonly-react-props': 'error',
    'flowtype/require-return-type': 'off',
    'flowtype/require-types-at-top': 'error',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-variable-type': 'off',
    'flowtype/semi': ['error', 'always'],
    'flowtype/sort-keys': ['error', 'asc'],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    // TODO: enable?
    'flowtype/spread-exact-type': 'off',
    'flowtype/type-id-match': 'off',
    // Use identifier as declaration imports are not well supported by vscode
    'flowtype/type-import-style': ['error', 'identifier'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'warn',
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
