const withMDX = require('@zeit/next-mdx')({
	extension: /\.(md|mdx)$/,
})
const withSize = require('next-size')

module.exports = withSize(
	withMDX({
		experimental: {
			modern: true,
		},
		pageExtensions: ['tsx', 'md', 'mdx'],
		webpack(config) {
			// preact stuff
			const splitChunks = config.optimization && config.optimization.splitChunks
			if (splitChunks) {
				const cacheGroups = splitChunks.cacheGroups
				const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
				if (cacheGroups.framework) {
					cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
						test: preactModules,
					})
					cacheGroups.commons.name = 'framework'
				} else {
					cacheGroups.preact = {
						name: 'commons',
						chunks: 'all',
						test: preactModules,
					}
				}
			}
			return config
		},
	}),
)
