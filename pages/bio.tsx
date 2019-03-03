import Page from '../components/Page';
import Head from '../components/Head';
import Markdown from '../components/Markdown';
import BioContent from '../content/bio.md';

const Bio: React.FC = () => (
    <Page>
        <Head title="Dan Tombs’ Bio" description="Dan Tombs Bio, 2018" />
        <Markdown>
            <BioContent />
        </Markdown>
    </Page>
);

export default Bio;
