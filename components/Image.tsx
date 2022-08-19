import NextImage from 'next/image'
import LazyLoad from 'react-lazyload'
import imageURI from '../lib/imageURI'

const uploads: {
	[name: string]: {
		id: string
		ratio: number
	}
} = require('../image_uploads.json')

const Image: React.FC<{ src: string; width?: number; alt?: string }> = ({
	width = 500,
	src,
	alt = '',
}) => (
	<LazyLoad key={src} height={width * uploads[src].ratio} once offset={100}>
		<div
			style={{
				paddingTop: `${100 * uploads[src].ratio}%`,
			}}
		>
			<NextImage
				layout="fill"
				width={width}
				loader={imageURI}
				src={src}
				alt={alt}
				sizes={`(max-width: 639px) 100vw, ${width}px`}
			/>
		</div>
		<style jsx>{`
			div {
				position: relative;
			}
			img {
				display: block;
				width: 100%;
				height: auto;
				position: absolute;
				top: 0;
			}
		`}</style>
	</LazyLoad>
)

export default Image
