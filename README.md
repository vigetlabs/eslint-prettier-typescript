# eslint-prettier-typescript

This repo contains the simplest possible configuration for tying together linting and formatting in TypeScript projects using ESLint and Prettier.

Running `eslint --fix ./src/*` will format code as part of the linting process.

Editors like VS Code can be configured to do this automatically on save:

```json
// settings.json
{
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```