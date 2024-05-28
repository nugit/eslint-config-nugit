// https://eslint.org/docs/latest/rules/#possible-problems
module.exports = {
  rules: {
    'array-callback-return': ['error', { allowImplicit: true }],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'off',
    'no-constant-condition': 'warn',
    'no-constructor-return': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'off',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'off',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'off',
    'no-prototype-builtins': 'error',
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-setter-return': 'off',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'off',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'off',
    'no-unused-private-class-members': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-useless-backreference': 'off',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
