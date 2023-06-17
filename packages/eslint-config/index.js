module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json', '../**/tsconfig.json'],
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				endOfLine: 'auto',
				jsxSingleQuote: false,
				semi: true,
				trailingComma: 'all',
				singleQuote: true,
				tabWidth: 2,
				indentStyle: 'tab',
				useTabs: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'react-hooks/exhaustive-deps': 'warn',
		'object-shorthand': 'error',
		'no-console': 'warn',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
