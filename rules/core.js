const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    /** ********************************************************** */
    /** **********          Possible Problems        ************* */
    /** ********************************************************** */
    
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],

    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // https://eslint.org/docs/rules/getter-return
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],

    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // https://eslint.org/docs/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'off',

    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'off',

    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'off',

    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',

    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'off',

    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',

    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // https://eslint.org/docs/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'off',

    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'off',

    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'off',

    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': 'off',

    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'off',

    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'off',

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'off',

    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],

    /** ********************************************************** */
    /** **********            Suggestions            ************* */
    /** ********************************************************** */

    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // https://eslint.org/docs/rules/camelcase
    'camelcase': [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [],
      },
    ],

    // https://eslint.org/docs/rules/complexity
    'complexity': [
      'off',
      11,
    ],

    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // https://eslint.org/docs/rules/curly
    'curly': [
      'error',
      'multi-line',
    ],

    // https://eslint.org/docs/rules/default-case
    'default-case': [
      'error',
      {
        commentPattern: '^no default$',
      },
    ],

    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'off',

    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'off',

    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // https://eslint.org/docs/rules/func-names
    'func-names': 'error',

    // https://eslint.org/docs/rules/func-style
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],

    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'off',

    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // https://eslint.org/docs/rules/logical-assignment-operators
    'logical-assignment-operators': 'off',

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': [
      'error',
      1,
    ],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': [
      'off',
      4,
    ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // https://eslint.org/docs/rules/max-params
    'max-params': [
      'off',
      3,
    ],

    // https://eslint.org/docs/rules/max-statements
    'max-statements': [
      'off',
      10,
    ],

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': [
      'off',
      'starred-block',
    ],

    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],

    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],

    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      },
    ],

    // https://eslint.org/docs/rules/no-empty-static-block
    'no-empty-static-block': 'off',

    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],

    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // https://eslint.org/docs/rules/no-labels
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],

    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
        allowSamePrecedence: true,
      },
    ],

    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': [
      'error',
    ],

    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'off',

    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': 'off',

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
    ].concat(confusingBrowserGlobals),

    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],

    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
      'off',
      {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
      },
    ],

    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // https://eslint.org/docs/rules/one-var
    'one-var': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'off',

    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // https://eslint.org/docs/rules/prefer-object-has-own
    'prefer-object-has-own': 'off',

    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'off',

    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/rules/quote-props
    'quote-props': [
      'error',
      'consistent-as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // https://eslint.org/docs/rules/radix
    'radix': 'error',

    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],

    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],

    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
          ],
        },
        block: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            ':',
            '::',
          ],
          balanced: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/strict
    'strict': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // https://eslint.org/docs/rules/yoda
    'yoda': 'error',

    /** ********************************************************** */
    /** **********        Layouts & Formatting       ************* */
    /** ********************************************************** */

    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': [
      'error',
      'consistent',
    ],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3,
      },
    ],

    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],

    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/dot-location
    'dot-location': [
      'error',
      'property',
    ],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': 'off',

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': [
      'error',
      'consistent',
    ],

    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],

    // https://eslint.org/docs/rules/indent
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [
      'off',
      'prefer-double',
    ],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],

    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [
      'error',
      'unix',
    ],

    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      100,
      2,
      {
        ignorePattern: '^import ',
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [
      'off',
      {
        max: 1,
      },
    ],

    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': [
      'off',
      'never',
    ],

    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],

    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],

    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],

    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 6,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 6,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 6,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],

    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'export',
          'function',
          'class',
          'cjs-export',
        ],
      },
      {
        blankLine: 'any',
        prev: [
          'export',
          'cjs-export',
        ],
        next: [
          'export',
          'cjs-export',
        ],
      },
    ],

    // https://eslint.org/docs/rules/quotes
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/semi
    'semi': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/semi-style
    'semi-style': [
      'error',
      'last',
    ],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [
      'error',
      'after',
    ],

    /** ********************************************************** */
    /** **********              Deprecated           ************* */
    /** ********************************************************** */

    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      'off',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': [
      'off',
      false,
    ],

    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // https://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'error',

  },
};
