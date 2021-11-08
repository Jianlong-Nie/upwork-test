module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: true, checksConditionals: true }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/triple-slash-reference": 0,
  },
};
