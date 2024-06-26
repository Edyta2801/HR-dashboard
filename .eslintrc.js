module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,

  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'coverage',
    'dist',
    'build',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    "import/order": 
    [
        1, 
        { "groups": [
          "external", 
          "builtin", 
          "internal", 
          "sibling", 
          "parent", 
          "index"
       ], 
      "pathGroups": [
          { 
            "pattern": "components", 
            "group": "internal" 
          }, 
          { 
            "pattern": "common", 
            "group": "internal" 
          }, 
          { 
            "pattern": "routes/ **", 
            "group": "internal" 
          }, 
          { 
            "pattern": "assets/**", 
            "group": "internal", 
            "position": "after" 
          }
       ], 
      "pathGroupsExcludedImportTypes": 
         ["internal"], 
         "alphabetize": { 
            "order": "asc", 
            "caseInsensitive": true 
         }
        } 
      ] 
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/?(*.)+(test).ts?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
  ],
};
