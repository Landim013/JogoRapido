module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  env: { es6: true, node: true, jest: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
