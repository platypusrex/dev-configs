import { PrettierConfig } from '@beemo/driver-prettier';
import { IGNORE_LIST } from '@beemo/config-constants';

const config: PrettierConfig = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.json', '*.yaml'],
      options: {
        useTabs: false,
      },
    },
  ],
  printWidth: 100,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  ignore: [
    ...IGNORE_LIST,
    'CHANGELOG.md',
    'lerna.json',
    'package.json',
    'tsconfig.json',
    'tsconfig.*.json',
    '*.d.ts',
  ],
};

export default config;
