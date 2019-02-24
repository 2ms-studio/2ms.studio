const withPlugins = require('next-compose-plugins');
const withPreact = require('@zeit/next-preact');
const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
});

module.exports = withPlugins(
    ['withTypescript', 'withTypescript', 'withPreact', 'withMDX'],
    {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
        target: 'serverless',
    },
);
