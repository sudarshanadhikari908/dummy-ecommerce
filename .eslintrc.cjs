module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-unresolved": 0,
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-no-useless-fragment": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
