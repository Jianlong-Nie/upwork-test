module.exports = {
  plugins: ["filenames-simple"],
  rules: {
    "filenames-simple/naming-convention": [
      "error",
      {
        rule: "kebab-case",
      },
    ],
  },
};
