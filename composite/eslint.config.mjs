// eslint.config.js
export default [
  {
      // extends: ["standard-with-typescript"],
      ignores: ['node_modules/', 'dist/', 'docs/'],

      rules: {
          semi: "error",
          "prefer-const": "error"
      }
  }
];
