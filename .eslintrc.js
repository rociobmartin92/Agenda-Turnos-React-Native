module.exports = {
  xtends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    },
    jest: {
      version: 'latest',
    },
  },
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      },
    ],
    'import/no-unresolved': ['error', {commonjs: true, amd: true}],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/no-duplicates': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prefer-arrow-callback': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-use-before-define': 'off',

    // react native rules
    'react-native/no-raw-text': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
