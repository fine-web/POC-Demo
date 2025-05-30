module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    rules: {
        'eqeqeq': ['error', 'smart'],
        'class-methods-use-this': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        'no-restricted-syntax': 'error',
        'react/react-in-jsx-scope': 'off',
        'no-var': 'error',
        // '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/quotes': ['warn', 'single'],
        // '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
        'react/hook-use-state': 'warn',
        'react/no-typos': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/void-dom-elements-no-children': 'error',
        '@typescript-eslint/await-thenable': 'error',
        'no-return-await': 'error',
    }, 
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        }
    },
};
