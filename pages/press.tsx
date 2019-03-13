import links from '../dan-edits-these/press-links.json'

const Home: React.FC<{}> = () => (
	<>
		<ul>
			{links.map(link => (
				<li key={link}>
					<a href={link}>{link}</a>
				</li>
			))}

			<style jsx>{`
				ul {
					list-style-type: none;
				}
				a {
					color: white;
				}
			`}</style>
		</ul>
	</>
)

export default Home
