# Unreleased

## Changes

- **[Breaking]**: upgrade `eslint-plugin-react-hooks` to `^4.0.2`
- **[Breaking]**: upgrade `eslint-plugin-flowtype` to `^5.2.0`
- **[Breaking]**: remove `eslint-plugin-ramda` to `^5.1.0`
- **[Breaking]**: minimum supported NodeJs version 12.18
- upgrade `babel-eslint` to `^10.1.0`
- upgrade `eslint-plugin-eslint-comments` to `^3.2.0`
- upgrade `eslint-plugin-import` to `^2.22.0`
- upgrade `eslint-plugin-jsx-a11y` to `^6.3.1`
- upgrade `eslint-plugin-react` to `^7.21.2`
- upgrade `eslint-plugin-react-hooks` to `^4.1.2`
- Fix dependency list in README

## Likely to cause new errors

- `require-atomic-updates`
- `array-bracket-newline`
- `func-names`: is now reported as error instead of warning
- `func-style`
- `lines-around-directive`: removed & replaced by `padding-line-between-statements`
- `no-multiple-empty-lines`: `{ max: 1, maxBOF: 0, maxEOF: 0 }`
- `no-restricted-syntax`: allow `for..of` usage
- `flowtype/require-compound-type-alias`: `always`
- `flowtype/require-readonly-react-props`
- `flowtype/no-existential-type`
- `import/no-namespace`
- `import/order`: add `alphabetize: { order: 'asc' 'caseInsensitive': true }` & change `groups` to the following - `order: `builtin`, `external`, `internal`, `parent`, `sibling`
- `import/no-unassigned-import`
- `import/no-anonymous-default-export`: for functions & classes
- `import/exports-last`
- `import/group-exports`
- `react/function-component-definition`
- `react/jsx-key`
- `react/no-direct-mutation-state`
- `react/state-in-constructor`
- `react/prefer-read-only-props`

# v0.3.1

## Changes

- Comma dangle is require for Flow inexact object notation (trailing ...) when multiline.

# v0.3.0

## Changes

- Set flow delimiter-dangle always-multiline for inexact object notation
- Add react-hooks plugin
- Add eslint-plugin-eslint-comments
- Add react/jsx-no-useless-fragment
- Upgrade peer-dependencies

## Likely to cause new errors

- `eslint-comments/no-duplicate-disable`
- `eslint-comments/no-unlimited-disable`
- `eslint-comments/no-unused-disable`
- `eslint-comments/no-unused-enable`
- `flowtype/delimiter-dangle`
- `react/jsx-no-useless-fragment`
- `react-hooks/rules-of-hooks`
- `react-hooks/exhaustive-deps`

## Upgrading Guide

- Add `eslint-plugin-eslint-comments` dependency

# v0.2.0

- Allow usage of dev dependencies in fixture files

# v0.1.0

- Initial version