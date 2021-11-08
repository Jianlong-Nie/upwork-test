module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    ...[
      //
      "./array",
      "./filename",
      "./prettier",
      "./typescript",
      "./node",
      "./arrow",
      "./sonarjs",
      "./react",
      "./reacta11y",
    ].map(require.resolve),
  ],
  rules: {
    "max-len": ["error", { code: 120 }],
    "no-alert": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "prefer-spread": 2,
    "prefer-template": 2,
    "prefer-object-spread": 2,
    "prefer-const": 2,
    radix: 2,
    "no-var": 2,
    "one-var-declaration-per-line": 2,
    "no-shadow": 2,
    "no-self-assign": 2,
    "require-await": 2,
    "no-return-await": 2,
  },
};
