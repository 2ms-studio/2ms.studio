import LazyLoad from 'react-lazyload'
import uploads from '../image_uploads.json'

interface Props {
	images?: [string]
	artist?: string
	title?: string
	client?: string
	date?: string
	description?: string
}

const imageURI = ({
	dpr,
	width,
	id,
}: {
	dpr: number
	width: number
	id: string
}) =>
	`https://res.cloudinary.com/twoms/image/upload/f_auto,q_60,c_scale,dpr_${dpr}.0,w_${width}/${id}`

const width = 500

const DesignImage: React.FC<Props> = ({
	images = [],
	artist,
	title,
	client,
	date,
	description,
}) => (
	<section>
		<div className="info">
			<h2 className="work">
				<span className="artist">{artist}</span>{' '}
				<span className="title">{title}</span>
			</h2>
			{(client || date) && (
				<h3 className="client">{[client, date].filter(Boolean).join(', ')}</h3>
			)}

			{description && <p className="description">> {description}</p>}
		</div>
		<LazyLoad height={300}>
			{images.map(src => (
				<img
					srcSet={[1, 2, 3, 4, 5]
						.map(dpr => `${imageURI({ id: uploads[src], width, dpr })} ${dpr}x`)
						.join(',')}
					alt=""
					key={src}
				/>
			))}
		</LazyLoad>

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
				width: ${width}px;
				height: auto;
				display: table;
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
