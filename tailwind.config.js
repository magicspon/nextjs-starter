const plugin = require('tailwindcss/plugin')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},

			zIndex: {
				top: 999999999,
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),

		plugin(({ addVariant, e }) => {
			addVariant('between', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.${e(`between${separator}${className}`)} > *:not(:last-child)`,
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant('child', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) => `.${e(`child${separator}${className}`)} > *`,
				)
			})
		}),
	],
}
