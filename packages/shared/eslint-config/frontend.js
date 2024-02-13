const { dirname } = require("path");

const projectRootDir = dirname(dirname(dirname(__dirname)));

/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "universe/native",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: projectRootDir,
      },
    },
  ],
  rules: {
    "import/order": "off",
    "import/no-relative-parent-imports": "error",
    "import/no-extraneous-dependencies": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-key": "warn",
  },
  ignorePatterns: ["dist"],
};
