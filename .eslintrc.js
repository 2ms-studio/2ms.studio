module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'@typescript-eslint/explicit-function-return-type': 0
	},
	settings: {
		react: {
			version: 'detect',
		},
		linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}
