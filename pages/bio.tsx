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
		{/* <style jsx>{`
            div {
                min-height: 100vh;
                display: flex;
                flex-direction: ${direction};
                align-items: center;
                justify-content: ${align};
                padding: 2em;
                position: relative;
            }
        `}</style> */}
	</Page>
)

export default Bio
