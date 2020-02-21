import Head from '../components/Head'

const ShowReel: React.FC = () => (
	<div>
		<Head title="Dan Tombs Showreel">
			{/* hide the page from search engine results */}
			<meta name="robots" content="noindex" />
		</Head>

		<iframe
			src="https://player.vimeo.com/video/309567641?color=fff&title=0&byline=0&portrait=0"
			frameBorder="0"
			allowFullScreen={true}
		/>

		<style jsx>{`
			div {
				padding: 56.25% 0 0 0;
				position: relative;
				width: 100%;
			}
			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		`}</style>
		<script src="https://player.vimeo.com/api/player.js" />
	</div>
)

export default ShowReel
