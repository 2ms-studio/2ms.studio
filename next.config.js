const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
});

const withPreact = require('@zeit/next-preact');

module.exports = withPreact(
    withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
        target: 'serverless',
    }),
);
