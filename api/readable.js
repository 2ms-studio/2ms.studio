const { parse } = require('url');
const read = require('node-readability');

module.exports = (req, res) => {
    try {
        const {
            query: { url },
        } = parse(req.url, true);

        if (!url) throw 'no URL param';

        read(url, function(err, { content, close }, meta) {
            try {
                close();
                if (err) throw err;
                if (meta.statusCode !== 200)
                    throw `Error: ${meta.statusCode}\n${url} does not exist`;

                res.end(content);
            } catch (e) {
                res.statusCode = 500;
                res.end(e);
            }
        });
    } catch (e) {
        res.statusCode = 500;
        res.end(e);
    }
};
