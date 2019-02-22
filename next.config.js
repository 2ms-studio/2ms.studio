const { PHASE_PRODUCTION_SERVER } =
    process.env.NODE_ENV === 'development'
        ? {}
        : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        return {
            /* production only config */
        };
    }
    const withMDX = require('@zeit/next-mdx')({
        extension: /\.(md|mdx)$/,
    });

    const withPreact = require('@zeit/next-preact');
    return withPreact(
        withMDX({
            pageExtensions: ['js', 'jsx', 'md', 'mdx'],
            target: 'serverless',
        }),
    );
};
