import pages from '../.scraped/urls.json'
import RGBSplit from '../components/RGBSplit'

const Home: React.FC<{}> = () => (
	<>
		<RGBSplit>
			<div dangerouslySetInnerHTML={{ __html: pages[2] }} />
		</RGBSplit>

		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
			}
		`}</style>
	</>
)

export default Home
