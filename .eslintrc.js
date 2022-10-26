module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
    'plugin:@blueprintjs/recommended',
    "@blueprintjs/eslint-config",
    'prettier'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    createDefaultProgram: true
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    '@blueprintjs'
  ],
  rules: {
    "@typescript-eslint/no-empty-function": "empty"
  }
};
