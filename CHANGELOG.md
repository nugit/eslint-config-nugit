# v0.4.0

## Changes

- **[Breaking]**: upgrade `eslint-plugin-react-hooks` to `^4.0.2`
- **[Breaking]**: upgrade `eslint-plugin-flowtype` to `^5.1.0`
- upgrade `eslint-plugin-react` to `^7.20.0`
- Fix dependency list in README


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