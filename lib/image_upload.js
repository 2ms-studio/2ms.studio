require('dotenv').config()

const { uploader } = require('cloudinary').v2
const globby = require('globby')
const { join, resolve } = require('path')
const mkdirp = require('mkdirp')
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)

const imageDir = resolve(__dirname, '..', 'dan-edits-these', 'images')

;(async () => {
	try {
		const paths = await globby('*.{png,jpg}', {
			cwd: imageDir,
		})

		const uploads = await Promise.all(
			paths.map(filePath =>
				uploader.upload(join(imageDir, filePath)).then(result => {
					console.log('Uploaded ' + result.secure_url)
					return result
				}),
			),
		)

		writeFile(
			resolve(__dirname, '..', 'image_uploads.json'),
			JSON.stringify(
				uploads.reduce(
					(_, upload) =>
						Object.assign(_, {
							[join(
								'images',
								`${upload.original_filename}.${upload.format}`,
							)]: upload.public_id,
						}),
					{},
				),
				null,
				4,
			),
		).then(() => console.log('Saved image filename map'))
	} catch (e) {
		console.log(e)
	}

	//=> ['unicorn', 'rainbow']
	// uploader.upload('../static/images/east_india_youth_culture_ofvolume.jpg')
})()
