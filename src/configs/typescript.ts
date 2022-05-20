import { TypeScriptConfig } from '@beemo/driver-typescript';

const config: TypeScriptConfig = {
  compilerOptions: {
    allowSyntheticDefaultImports: true,
    composite: true,
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    importHelpers: true,
    jsx: 'react-jsx',
    lib: ['dom', 'esnext'],
    module: 'commonjs',
    moduleResolution: 'node',
    noFallthroughCasesInSwitch: true,
    noImplicitReturns: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    preserveConstEnums: true,
    resolveJsonModule: true,
    skipLibCheck: true,
    strict: true,
    target: 'esnext',
  },
};

export default config;
