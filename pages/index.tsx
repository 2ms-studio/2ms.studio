import Link from 'next/link'
import pages from '../.scraped/urls.json'
import Page from '../components/Page'
import ScrapedSite from '../components/ScrapedSite'

const Home: React.FC<{}> = () => (
	<Page align="center" direction="row">
		<style jsx global>{`
			body {
				background-color: black;
			}
		`}</style>

		<h1>2MS</h1>
		<ul>
			<li>
				<Link href="/bio">
					<a>bio</a>
				</Link>
			</li>
			<li>
				<a href="mailto:dan@2MS.studio">contact</a>
			</li>
		</ul>
		<style jsx>{`
			ul {
				list-style: none;
				padding: 0;
				display: flex;
			}
			li:before {
				padding: 0 1ch;
				content: '·';
			}
		`}</style>

		<div>
			{['red', 'lime', 'blue', 'main'].map(colour => (
				<ScrapedSite color={colour} content={pages[2]} key={colour} />
			))}
		</div>
		<style jsx>{`
			div {
				position: relative;
				pointer-events: none;
				z-index: 1;
			}
		`}</style>
		<style jsx global>{`
			body {
				background-color: black;
			}
		`}</style>
	</Page>
)

export default Home
