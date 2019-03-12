import Head from '../components/Head'
import BioContent from '../dan-edits-these/bio.md'
import meta from '../dan-edits-these/meta.json'

const Bio: React.FC = () => (
	<div>
		<Head title="Dan Tombs’ Bio" description={meta.description.bio} />
		<BioContent />
		<style jsx>{`
			div :global(p),
			div :global(h2),
			div :global(h1) {
				background-color: rgba(0, 0, 0, 0.6);
			}

			div :global(h1) {
				text-align: center;
				font-size: 150%;
				font-weight: normal;
				margin-bottom: 0;
				position: relative;
			}
			div :global(h2) {
				text-align: center;
				font-weight: normal;
				font-size: 12px;
				margin-bottom: 15px;
				padding-bottom: 0.4em;
				position: relative;
			}
			div :global(p) {
				display: inline;
				padding: 3px 0 4px;
				position: relative;
			}

			div :global(p + p::before) {
				display: block;
				content: '';
				clear: both;
				height: 15px;
			}
			div :global(p:first-of-type) {
				text-indent: 0;
			}
			div :global(em:first-child) {
				text-transform: uppercase;
				font-style: normal;
			}
		`}</style>
	</div>
)

export default Bio
