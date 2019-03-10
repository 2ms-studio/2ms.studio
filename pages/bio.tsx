import Head from '../components/Head'
import Markdown from '../components/Markdown'
import Page from '../components/Page'
import BioContent from '../dan-edits-these/bio.md'
import meta from '../dan-edits-these/meta.json'

const Bio: React.FC = () => (
	<Page>
		<Head title="Dan Tombs’ Bio" description={meta.description.bio} />
		<Markdown>
			<BioContent />
		</Markdown>
	</Page>
)

export default Bio
