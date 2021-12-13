const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1,
}

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['react-hooks', '@typescript-eslint', 'import', 'jsx-a11y'],
	parserOptions: {
		project: ['./tsconfig.json'],
		createDefaultProgram: true,
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:@next/next/recommended',
		'eslint-config-prettier',
	],
	rules: {
		'@typescript-eslint/naming-convention': rules.OFF,
		'@typescript-eslint/camelcase': rules.OFF,
		'@typescript-eslint/explicit-function-return-type': rules.OFF,
		'@typescript-eslint/explicit-member-accessibility': rules.OFF,
		'@typescript-eslint/no-non-null-assertion': rules.OFF,
		'@typescript-eslint/no-unused-vars': rules.OFF,
		'@typescript-eslint/array-type': rules.OFF,
		'@typescript-eslint/no-explicit-any': rules.OFF,
		'@typescript-eslint/no-empty-interface': rules.OFF,
		'@typescript-eslint/no-empty-function': rules.OFF,
		'@typescript-eslint/no-use-before-define': rules.OFF,
		'@typescript-eslint/no-object-literal-type-assertion': rules.OFF,
		'@typescript-eslint/no-var-requires': rules.OFF,
		'import/no-extraneous-dependencies': rules.OFF,
		'import/prefer-default-export': rules.OFF,
		'react/no-deprecated': rules.OFF,
		'react/prop-types': rules.OFF,
		'react-hooks/rules-of-hooks': rules.ON,
		'react-hooks/exhaustive-deps': rules.WARN,
		'react/require-default-props': rules.OFF,
		'react/no-unescaped-entities': rules.OFF,
		'react/jsx-props-no-spreading': rules.OFF,
		'prefer-spread': rules.WARN,
		'prefer-arrow-callback': rules.OFF,
		'no-nested-ternary': rules.OFF,
		'jsx-a11y/anchor-is-valid': rules.OFF,
		'jsx-a11y/label-has-associated-control': [
			rules.ON,
			{
				labelComponents: ['Label'],
				// labelAttributes: ["label"],
				controlComponents: ['Radio', 'Checkbox', 'Input'],
				depth: 3,
			},
		],
	},
	overrides: [
		{
			files: ['*.json'],
			rules: {
				'@typescript-eslint/no-unused-expressions': rules.OFF,
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
}
