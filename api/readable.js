const { parse } = require('url');
const read = require('node-readability');

module.exports = (req, res) => {
    console.log(1);

    try {
        const {
            query: { url },
        } = parse(req.url, true);
        console.log(2);

        if (!url) throw 'no URL param';

        console.log(3);

        read(url, function(err, { content, close }, meta) {
            console.log(4);
            try {
                close();
                if (err) throw err;
                if (meta.statusCode !== 200)
                    throw `Error: ${meta.statusCode}\n${url} does not exist`;
                console.log(5);
                res.end(content);
                console.log('5.1');
            } catch (e) {
                console.log(6);
                res.statusCode = 500;
                res.end(e);
            }
        });
    } catch (e) {
        console.log(7);
        res.statusCode = 500;
        res.end(e);
    }
};
