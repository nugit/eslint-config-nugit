# eslint-config-nugit

[![npm version](https://badge.fury.io/js/eslint-config-nugit.svg)](http://badge.fury.io/js/eslint-config-nugit)

This package provides Nugit's JS .eslintrc as an extensible shared config.

## Installation

```sh
npm i eslint-config-nugit --save-dev
```

> NOTE: NPM 10 is required otherwise you'll need to manually install peerDependencies. Peer dependencies change won't be considered as breaking change anymore.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-nugit

Our default export contains all of our ESLint rules, including ECMAScript 6+, FlowJS and React.

If you don't need React, see `eslint-config-nugit/base`.

- Add `"extends": "nugit"` to your .eslintrc.

### eslint-config-nugit/base

Our default export contains all of our ESLint rules, including ECMAScript 6+ and FlowJS.

- Add `"extends": "nugit/base"` to your .eslintrc

### eslint-config-nugit/script

Same as `eslint-config-nugit/base` but allow to use `devDependencies` & `console.log`.

- Add `"extends": "nugit/script"` to your .eslintrc
