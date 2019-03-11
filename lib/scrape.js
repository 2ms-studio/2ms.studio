const { writeFileSync } = require('fs')
const { join } = require('path')
const mkdirp = require('mkdirp')
const scrape = require('ascrape')

const { urls } = require('../dan-edits-these/press-links.json')

const dir = join(__dirname, '..', '.scraped')

mkdirp.sync(dir)

Promise.all(
	urls.map(
		url =>
			new Promise(resolve => {
				scrape(url, (err, result) => {
					try {
						return resolve(result.content.html())
					} catch (e) {
						return resolve(null)
					}
				})
			}),
	),
)
	.then(results => results.filter(Boolean))
	.then(scrapedURLs =>
		writeFileSync(
			join(dir, 'urls.json'),
			JSON.stringify(scrapedURLs, null, 4),
		),
	)
	.catch(console.log) //eslint-disable-line
