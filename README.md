# eslint-config-nugit

[![npm version](https://badge.fury.io/js/eslint-config-nugit.svg)](http://badge.fury.io/js/eslint-config-nugit)

This package provides Nugit's JS .eslintrc as an extensible shared config.

## Installation

- Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-nugit@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-nugit
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-nugit@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-nugit

Our default export contains all of our ESLint rules, including ECMAScript 6+, FlowJS and React.

It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`,
and `eslint-plugin-jsx-a11y`. If you don't need React, see `eslint-config-nugit/base`.

- Add `"extends": "nugit"` to your .eslintrc.

### eslint-config-nugit/base

Our default export contains all of our ESLint rules, including ECMAScript 6+ and FlowJS.

It requires `eslint` and `eslint-plugin-import`.

- Add `"extends": "nugit/base"` to your .eslintrc
