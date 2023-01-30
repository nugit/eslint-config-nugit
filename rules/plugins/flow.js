module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-flow',
        '@babel/preset-react',
      ],
    },
  },

  plugins: ['ft-flow'],

  // View link below for flow rules documentation
  // https://github.com/flow-typed/eslint-plugin-ft-flow#rules
  rules: {
    'ft-flow/array-style-complex-type': ['error', 'verbose'],
    'ft-flow/array-style-simple-type': ['error', 'shorthand'],
    'ft-flow/arrow-parens': 'off',
    'ft-flow/boolean-style': 'off',
    'ft-flow/define-flow-type': ['warn'],
    'ft-flow/delimiter-dangle': 'off',
    'ft-flow/enforce-line-break': 'off',
    'ft-flow/enforce-suppression-code': 'off',
    'ft-flow/generic-spacing': 'off',
    'ft-flow/newline-after-flow-annotation': ['error', 'always'],
    'ft-flow/no-dupe-keys': ['error'],
    'ft-flow/no-duplicate-type-union-intersection-members': ['error'],
    'ft-flow/no-existential-type': 'error',
    'ft-flow/no-flow-fix-me-comments': 'error',
    'ft-flow/no-internal-flow-type': 'error',
    'ft-flow/no-mixed': 'off',
    'ft-flow/no-mutable-array': 'off',
    'ft-flow/no-primitive-constructor-types': 'error',
    'ft-flow/no-types-missing-file-annotation': 'error',
    'ft-flow/no-unused-expressions': 'error',
    'ft-flow/object-type-curly-spacing': 'off',
    'ft-flow/no-weak-types': ['error', { any: true }],
    'ft-flow/object-type-delimiter': 'off',
    'ft-flow/quotes': 'off',
    'ft-flow/require-compound-type-alias': ['off', 'always'],
    'ft-flow/require-exact-type': 'off',
    'ft-flow/require-indexer-name': 'off',
    'ft-flow/require-inexact-type': 'off',
    'ft-flow/require-parameter-type': 'off',
    'ft-flow/require-readonly-react-props': 'error',
    'ft-flow/require-return-type': 'off',
    'ft-flow/require-types-at-top': 'off',
    'ft-flow/require-valid-file-annotation': 'off',
    'ft-flow/require-variable-type': 'off',
    'ft-flow/semi': 'off',
    'ft-flow/sort-keys': ['error', 'asc'],
    'ft-flow/sort-type-union-intersection-members': ['error'],
    'ft-flow/space-after-type-colon': 'off',
    'ft-flow/space-before-generic-bracket': 'off',
    'ft-flow/space-before-type-colon': 'off',
    'ft-flow/spread-exact-type': 'off',
    'ft-flow/type-id-match': 'off',
    'ft-flow/type-import-style': ['error', 'declaration'],
    'ft-flow/union-intersection-spacing': 'off',
    'ft-flow/use-flow-type': 'warn',
  },

  settings: {
    'ft-flow': {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
