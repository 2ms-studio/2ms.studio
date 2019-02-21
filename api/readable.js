const { parse } = require('url');
const { promisify } = require('util');
const read = require('node-readability');

module.exports = (req, res) => {
    try {
        const {
            query: { url },
        } = parse(req.url, true);

        if (!url) throw 'no URL param';

        console.log(typeof url);

        read(url, function(err, article, meta) {
            if (err) {
                res.statusCode = 500;
                res.end(err.message);
            }

            if (meta.statusCode !== 200) {
                res.statusCode = 500;
                res.end(`Readability error: ${meta.statusCode}`);
            }

            res.statusCode = 200;
            res.end(article.content);
            article.close();
        });
    } catch (e) {
        res.statusCode = 500;
        res.end(e.message);
    }
};
