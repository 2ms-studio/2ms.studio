const withMDX = require('@zeit/next-mdx')({
	extension: /\.(md|mdx)$/,
})
const withSize = require('next-size')

module.exports = withSize(
	withMDX({
		pageExtensions: ['tsx', 'md', 'mdx'],
	}),
)
