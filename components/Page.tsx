import Head from './Head'
import Nav from './Nav'

const Page: React.FC = ({ children }) => (
	<>
		<Head />
		<div>
			<Nav />
			{children}
		</div>
		<style jsx>{`
			div {
				padding: 15px;
			}
			div :global(nav + div) {
				margin-top: 10px;
			}

			@media (min-width: 640px) {
				div :global(nav + div) {
					margin-left: 155px;
					max-width: 500px;
					margin-top: 0;
				}
			}

			@media (min-width: 840px) {
				div :global(nav + div) {
					margin-left: auto;
					margin-right: auto;
				}
			}
		`}</style>
	</>
)
export default Page
