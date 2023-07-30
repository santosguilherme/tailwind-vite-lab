module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true, jest: true },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", "node_modules"],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        distinctGroup: false,
      },
    ],
    "import/newline-after-import": ["error", { considerComments: true }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
