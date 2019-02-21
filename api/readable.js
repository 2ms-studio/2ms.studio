const { parse } = require('url');
const { promisify } = require('util');
const read = promisify(require('node-readability'));

module.exports = async (req, res) => {
    try {
        const {
            query: { url },
        } = parse(req.url, true);

        if (!url) throw 'no URL param';

        const { content, close } = await read(url);
        res.statusCode = 200;
        res.end(content);
    } catch (e) {
        res.statusCode = 500;
        res.end(e);
    }
};
