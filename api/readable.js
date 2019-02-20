const { parse } = require('url');
const read = require('node-readability');

module.exports = (req, res) => {
    const { query } = parse(req.url, true);
    const { url } = query;

    if (url) {
        read(url, function(err, article, meta) {
            if (err) res.end(err);

            const { content } = article;
            article.close();
            res.end(content);
        });
    } else {
        res.end('You need to supply a URL param: ?url=https://etc');
    }
};
