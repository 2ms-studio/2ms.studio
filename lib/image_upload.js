/* eslint-disable no-console */

const path = require('path')

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.build') })

const { uploader } = require('cloudinary').v2
const globby = require('globby')
const { join, resolve } = require('path')
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)

const imageDir = resolve(__dirname, '..', 'dan-edits-these', 'images')

globby('*.{png,jpg}', {
	cwd: imageDir,
})
	.then((paths) =>
		Promise.all(
			paths.map((filePath) =>
				uploader
					.upload(join(imageDir, filePath), {
						use_filename: true,
						unique_filename: false,
					})
					.then((result) => {
						console.log('Uploaded ' + result.secure_url)
						return result
					}),
			),
		),
	)
	.then((uploads) =>
		writeFile(
			resolve(__dirname, '..', 'image_uploads.json'),
			JSON.stringify(
				uploads.reduce(
					(_, upload) =>
						Object.assign(_, {
							[join('images', `${upload.original_filename}.${upload.format}`)]:
								{ id: upload.public_id, ratio: upload.height / upload.width },
						}),
					{},
				),
				null,
				4,
			),
		).then(() => console.log('Saved image filename map')),
	)
	.catch(console.log)
