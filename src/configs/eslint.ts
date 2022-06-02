import * as eslint from 'eslint';
import { IGNORE_LIST } from '@beemo/config-constants';

interface ESLintConfig extends eslint.Linter.BaseConfig {
  root: boolean;
  ignore: string[];
}

const { tool } = process.beemo;
const { react } = tool.config.settings;

const config: ESLintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignore: [
    ...IGNORE_LIST,
    '*.min.js',
    '*.map',
    '*.snap',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': ['error', { 'newlines-between': 'never' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

if (react) {
  config.settings = {
    react: {
      version: 'detect',
    },
  };
  config.env = {
    ...config.env,
    browser: true,
  }
  if (config.parserOptions){
    config.parserOptions.ecmaFeatures = {
      jsx: true,
    }
  }
}

export default config;
