import Image from './Image'

interface Props {
	images?: [string]
	artist?: string
	title?: string
	client?: string
	date?: string
	description?: string
}

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
			images.map((src) => (
				<Image src={src} key={src} alt={`Image of ${artist}’s ${title}`} />
			))}
		<div className="info">
			<h2 className="work">
				<span className="artist">{artist}</span>
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
				padding-right: 1ex;
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
