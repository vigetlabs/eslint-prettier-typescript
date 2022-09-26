# eslint-prettier-typescript

This repo contains the simplest possible configuration for tying together linting and formatting in TypeScript projects using ESLint and Prettier.

Running `eslint --fix ./src/*` will format code as part of the linting process.

Editors like VS Code can be configured to do this automatically on save:

```json
// settings.json
{
  // option 1:
  "eslint.format.enable": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,

  // option 2:
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```

Option 1 should suffice unless you have other non-formatting related commands you want to run on save (e.g. organizing imports) and you want to ensure the ordering is explicit.

If you would prefer not to see ESLint formatting feedback inside VS Code while you work (it can be distracting), you can add a rule customization (specifically for your editor) that disables the prettier-related violations from appearing as red squigglies:

```json
// settings.json
{
 "eslint.rules.customizations": [
    { "rule": "prettier/*", "severity": "off" }
  ]
}
```