import pages from '../.scraped/urls.json'
import Page from '../components/Page'
import RGBSplit from '../components/RGBSplit'

const Home: React.FC<{}> = () => (
	<Page>
		<RGBSplit>
			<div dangerouslySetInnerHTML={{ __html: pages[2] }} />
		</RGBSplit>

		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
				color: white;
				-webkit-font-smoothing: antialiased;
			}
		`}</style>
	</Page>
)

export default Home
