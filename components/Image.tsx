import LazyLoad from 'react-lazyload'
import imageURI from '../lib/imageURI'

const uploads: {
	[name: string]: {
		id: string
		ratio: number
	}
} = require('../image_uploads.json') // eslint-disable-line @typescript-eslint/no-var-requires

const Image: React.FC<{ src: string; width?: number }> = ({
	width = 500,
	src,
}) => (
	<LazyLoad key={src} height={width * uploads[src].ratio} once offset={100}>
		<div
			style={{
				paddingTop: `${100 * uploads[src].ratio}%`,
			}}
		>
			<img
				srcSet={[
					`${imageURI({ src, width: 290 })} 320w`,
					`${imageURI({ src, width: 345 })} 375w`,
					`${imageURI({ src, width: 384 })} 414w`,
					`${imageURI({ src, width: 500 })} 500w`,
					`${imageURI({ src, width: 608 })} 639w`,
					`${imageURI({ src, width: 690 })} 750w`,
					`${imageURI({ src, width: 768 })} 828w`,
					`${imageURI({ src, width: 1000 })} 1000w`,
					`${imageURI({ src, width: 1216 })} 1278w`,
				].join(',')}
				sizes={`(max-width: 639px) 100vw, ${width}px`}
				alt=""
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
