module.exports = {
  env: {
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    jest: {
      version: 'latest',
    },
    plugins: ['react'],
    rules: {
      'react/jsx-one-expression-per-line': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.tsx',
            '**/*.test.ts',
            '**/*.stories.tsx',
          ],
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
        },
      ],
      'prefer-arrow-callback': 'error',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-use-before-define': 'off',

      'react/jsx-uses-react': 'on',
      'react/react-in-jsx-scope': 'on',

      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      // react native rules
      'react-native/no-raw-text': 'off',
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-single-element-style-arrays': 'error',
    },
  },
};
