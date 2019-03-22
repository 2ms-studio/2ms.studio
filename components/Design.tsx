import LazyLoad from 'react-lazyload'

interface Props {
	images?: [string]
	artist?: string
	title?: string
	client?: string
	date?: string
	description?: string
}

const uploads: {
	[name: string]: {
		id: string
		ratio: number
	}
} = require('../image_uploads.json') // eslint-disable-line @typescript-eslint/no-var-requires

const imageURI = ({ width, id }: { width: number; id: string }) =>
	`https://res.cloudinary.com/twoms/image/upload/f_auto,q_60,c_scale,w_${width}/${id}`

const width = 500

const DesignImage: React.FC<Props> = ({
	images,
	artist,
	title,
	client,
	date,
	description,
}) => (
	<section>
		{images &&
			images.map(src => (
				<LazyLoad
					key={src}
					height={width * uploads[src].ratio}
					once
					offset={100}
				>
					<div
						style={{
							position: 'relative',
							paddingTop: 100 * uploads[src].ratio + '%',
						}}
					>
						<img
							srcSet={[
								`${imageURI({ id: uploads[src].id, width: 290 })} 320w`,
								`${imageURI({ id: uploads[src].id, width: 345 })} 375w`,
								`${imageURI({ id: uploads[src].id, width: 384 })} 414w`,
								`${imageURI({ id: uploads[src].id, width: 500 })} 500w`,
								`${imageURI({ id: uploads[src].id, width: 608 })} 639w`,
								`${imageURI({ id: uploads[src].id, width: 690 })} 750w`,
								`${imageURI({ id: uploads[src].id, width: 768 })} 828w`,
								`${imageURI({ id: uploads[src].id, width: 1000 })} 1000w`,
								`${imageURI({ id: uploads[src].id, width: 1216 })} 1278w`,
							].join(',')}
							sizes={`(max-width: 639px) 100vw, ${width}px`}
							alt=""
						/>
					</div>
				</LazyLoad>
			))}
		<div className="info">
			<h2 className="work">
				<span className="artist">{artist}</span>{' '}
				<span className="title">{title}</span>
			</h2>
			{(client || date) && (
				<h3 className="client">{[client, date].filter(Boolean).join(', ')}</h3>
			)}

			{description && <p className="description">&gt; {description}</p>}
		</div>

		<style jsx>{`
			section {
				position: relative;
				font-size: 14px;
			}
			section + section {
				margin-top: 15px;
			}
			.info {
				position: absolute;
				top: 0;
				left: 0;
			}
			img {
				display: block;
				width: 100%;
				height: auto;
				position: absolute;
				top: 0;
			}

			.work,
			.client,
			.date,
			.description {
				margin: 0;
				background-color: rgba(255, 255, 255, 0.3);
				display: table;
				color: black;
				padding: 0 6px;
			}
			h2 {
				margin: 0;
			}

			.artist {
				text-transform: uppercase;
			}

			.title,
			.description {
				font-style: italic;
			}

			.client {
			}
		`}</style>
	</section>
)

export default DesignImage
