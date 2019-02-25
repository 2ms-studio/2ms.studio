const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
});
const withSize = require('next-size');

module.exports = withSize(
    withMDX(
        withTypescript({
            pageExtensions: ['tsx', 'md', 'mdx'],
            target: 'serverless',
        }),
    ),
);
