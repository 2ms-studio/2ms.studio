const { parse } = require('url');

const scrape = require('ascrape');

module.exports = (req, res) => {
    try {
        const {
            query: { url },
        } = parse(req.url, true);
        if (!url) throw 'no URL param';

        scrape(url, (err, { content }, meta) => {
            if (err) {
                res.statusCode = 500;
                res.end(err.message);
            }

            if (content) {
                res.statusCode = 200;
                res.end(content.html());
            }

            res.statusCode = 500;
            res.end('no article found');
        });
    } catch (e) {
        res.statusCode = 500;
        res.end(e.message);
    }
};
