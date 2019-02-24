const withTypescript = require('@zeit/next-typescript');
const withPreact = require('@zeit/next-preact');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
});

module.exports = withPreact(
    withMDX(
        withTypescript({
            pageExtensions: ['tsx', 'md', 'mdx'],
            target: 'serverless',
        }),
    ),
);
