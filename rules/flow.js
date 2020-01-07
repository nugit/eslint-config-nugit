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
    'flowtype/delimiter-dangle': ['error', 'always-multiline', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/newline-after-flow-annotation': ['error', 'always'],
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/no-mixed': 'off',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': ['error', { any: false }],
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-readonly-react-props': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
    'flowtype/semi': ['error', 'always'],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': 'off',
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'warn',
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
