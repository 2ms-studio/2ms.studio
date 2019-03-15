import ReactPlayer from 'react-player'
import videos from '../dan-edits-these/videos.json'

const Video: React.FC = () => (
	<>
		<div>
			{videos.map(video => (
				<div key={video} className="wrapper">
					<ReactPlayer
						url={video}
						className="player"
						width="100%"
						height="100%"
						controls={true}
					/>
				</div>
			))}
			<style jsx>{`
				div {
					position: relative;
					z-index: 15;
				}
				.wrapper {
					position: relative;
					padding-top: 56.25%;
				}
				.wrapper + .wrapper {
					border-top: 15px dotted rgba(0, 0, 0, 0.6);
				}

				.wrapper :global(.player) {
					position: absolute;
					top: 0;
					left: 0;
				}
			`}</style>
		</div>
	</>
)

export default Video
