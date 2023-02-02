module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  // https://github.com/jsx-eslint/eslint-plugin-react
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/boolean-prop-naming': ['off'],
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true },
    ],
    'react/destructuring-assignment': ['off', 'always'],
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/forbid-dom-props': ['off', { forbid: [] }],
    'react/forbid-elements': ['off', { forbid: [] }],
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],
    'react/hook-use-state': 'off',
    'react/iframe-missing-sandbox': 'off',
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-literals': ['off', { noStrings: true }],
    'react/jsx-no-script-url': 'off',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-props-no-spreading': [
      'off',
      {
        html: 'enforce',
        custom: 'enforce',
        exceptions: [],
      },
    ],
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-space-before-closing': ['off', 'always'],
    'react/jsx-tag-spacing': 'off',
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invali-html-attribute': 'off',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'off',
    'react/no-object-type-as-default-prop': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-class-component-methods': 'off',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-exact-props': ['error'],
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: false,
      },
    ],
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'componentDidCatch',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/sort-default-props': 'off',
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
