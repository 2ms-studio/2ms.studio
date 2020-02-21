import LazyLoad from 'react-lazyload'
import ReactPlayer from 'react-player'
import videos from '../dan-edits-these/videos.json'

const Video: React.FC = () => (
	<>
		{videos.map(video => (
			<div className="wrapper" key={video}>
				<LazyLoad once offset={100}>
					<ReactPlayer
						url={video}
						className="player"
						width="100%"
						height="100%"
						controls={true}
					/>
				</LazyLoad>
			</div>
		))}
		<style jsx>{`
			.wrapper {
				position: relative;
				padding-top: 56.25%;
				box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.4);
			}
			.wrapper + .wrapper {
				margin-top: 20px;
			}

			.wrapper :global(.player) {
				position: absolute;
				top: 0;
				left: 0;
			}
		`}</style>
	</>
)

export default Video
