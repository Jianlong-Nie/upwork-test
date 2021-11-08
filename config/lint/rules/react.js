module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-perf"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:react-perf/all"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    "react/jsx-boolean-value": ["error", "always"],

    "react/jsx-handler-names": [
      2,
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": [
      "error",
      {
        maximum: 1,
        when: "multiline",
      },
    ],
    "react/jsx-no-bind": "error",
    "react/jsx-no-duplicate-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react/prop-types": 0,
    "react/prefer-stateless-function": 1,
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-no-target-blank": [
      "error",
      {
        enforceDynamicLinks: "always",
      },
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-curly-newline": [
      "error",
      {
        multiline: "consistent",
        singleline: "consistent",
      },
    ],
    "react/no-deprecated": ["error"],
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "react/jsx-curly-spacing": [
      "error",
      "never",
      {
        allowMultiline: true,
      },
    ],
    "react/display-name": 0,
    "react/button-has-type": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-unknown-property": "error",
    // For translation
    "react/jsx-no-literals": "error",
  },
};
