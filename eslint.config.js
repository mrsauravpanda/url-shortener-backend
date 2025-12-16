import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        URL: 'readonly'
      }
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'eqeqeq': 'error',
      'curly': 'error'
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '*.log'
    ]
  }
];