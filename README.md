# eslint-prettier-typescript

This repo contains an example configuration for using `eslint` alongside `prettier` in a TypeScript project.

ESLint has [announced](https://eslint.org/blog/2023/10/deprecating-formatting-rules/) they are deprecating all formatting rules in v8.53.0 (November 3, 2023) and will remove them in a later version (likely v10.0.0).

This means that if you want to continue using ESLint for linting **and also formatting**, you will need to use a plugin like `eslint-plugin-prettier` to run Prettier as an ESLint rule.

Instead, this repo opts to use ESLint for linting and Prettier for formatting. This is a common approach and is recommended by Prettier themselves. Until ESLint removes their formatting rules, we must use `eslint-config-prettier` to disable ESLint formatting rules that conflict with prettier.

## Installing the Prerequisites

```bash
$ npm i -D eslint prettier eslint-config-prettier
```

Make sure your configuration has `extends: ["prettier"]` in your ESLint config (it should be the last item in the `extends` list so it can override other plugin rules).

**If you're using TypeScript:**

```bash
$ npm i -D typescript @typescript-eslint/eslint-plugin
```

Set your ESLint `parser` to `@typescript-eslint/parser` and add `"plugin:@typescript-eslint/recommended"` to `extends` (before `"prettier"`) if you want a solid baseline of TS rules.


## Configure VSCode to run `eslint --fix` and `prettier` on save

```js
// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

## (optional) Install `husky` and `lint-staged` to run `eslint --fix` and `prettier` on commit

It's recommended to enforce linter and formatter rules on commit. This ensures that all code, even if it was added by a contributor who doesn't have the same configuration, is linted and formatted before being committed.

For the same reason, these checks should also be done in CI. Contributors can also bypass commit hooks by using `git commit --no-verify`, so CI is the last line of defense.

[Reference Article](https://duncanlew.medium.com/getting-started-with-husky-and-lint-staged-for-pre-commit-hooks-c2764d8c9ae)

### Install and Initialize `husky`

```bash
$ npx husky-init && npm i
```

### Install `lint-staged`

```bash
$ npm i -D lint-staged
```

### Update `.husky/pre-commit`

Inside .husky/pre-commit replace npm test with npx lint-staged. Your file should look as follows:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx lint-staged
```

### Configure `lint-staged`

```json
{
  "*.{js,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```