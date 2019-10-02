const uploads: {
	[name: string]: {
		id: string
		ratio: number
	}
} = require('../image_uploads.json') // eslint-disable-line @typescript-eslint/no-var-requires

export default ({ width, src }: { width: number; src: string }) =>
	`https://res.cloudinary.com/twoms/image/upload/f_auto,q_60,c_scale,w_${width}/${uploads[src].id}`
