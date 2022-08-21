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
			<picture>
				<source
					srcSet={`${imageURI({ width: width * 3, src })} 3x, ${imageURI({
						width: width * 2,
						src,
					})} 2x, ${imageURI({
						width,
						src,
					})} 1x`}
					type="image/webp"
				/>
				<img
					src={imageURI({ width, src })}
					alt={alt}
					sizes={`(max-width: 639px) 100vw, ${width}px`}
				/>
			</picture>
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
