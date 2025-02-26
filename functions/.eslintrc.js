module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*",
    "/generated/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["warn", "double"],
    "import/no-unresolved": 0,
    "indent": ["warn", 2],
    // Add any specific rules you want to customize here
  },
  // Override to ensure TypeScript-specific rules are warnings
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // Downgrade specific TypeScript rules to warnings if needed
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-explicit-any": ["warn"],
        // Add more specific rules as needed
      },
    },
  ],
};
