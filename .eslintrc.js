module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                semi: false,
                printWidth: 100,
                tabWidth: 4,
            },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-console': 'warn',
    },
    parserOptions: {
        sourceType: 'module',
    },
    ignorePatterns: ['dist/', 'tmp/', 'coverage/', 'assets/', '.github/'],
    env: {
        node: true,
        jest: true,
    },
    root: true,
}
