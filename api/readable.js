const { parse } = require('url');
const read = require('node-readability');

module.exports = (req, res) => {
    const { url } = parse(req.url, true);
    read(url, function(err, article, meta) {
        if (err) res.end(err);

        article.close();
        res.end(article.content);
    });
};
