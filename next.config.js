const withPreact = require('next-plugin-preact')
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
	) => {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.tsx?$/,
			// include: [options.dir],
			use: [
				'next-swc-loader',
				{
					loader: '@svgr/webpack',
					options: { babel: false },
				},
			],
		})
		return config
	},
}

module.exports = withMDX(withPreact(nextConfig))
