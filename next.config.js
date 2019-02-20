const withMDX = require('@zeit/next-mdx')({
	extension: /\.(md|mdx)$/,
});
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
	withMDX({
		pageExtensions: ['js', 'jsx', 'md', 'mdx'],
		// target: 'serverless',
	}),
);
