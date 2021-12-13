module.exports = {
	poweredByHeader: false,

	eslint: {
		dirs: ['src'],
	},

	// pwa: {
	// 	dest: 'public',
	// 	disable: process.env.NODE_ENV === 'development',
	// },

	images: {
		sizes: [320, 480, 820, 1020],
		domains: [process.env.IMAGE_DOMAIN],
	},

	webpack: (config, options) => {
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
				{
					test: /\.(graphql|gql)$/,
					exclude: /node_modules/,
					loader: 'graphql-tag/loader',
				},
				{
					test: /\.(glsl|vs|fs|vert|frag)$/,
					exclude: /node_modules/,
					use: ['raw-loader', 'glslify-loader'],
				},
			],
		}

		return config
	},
}
