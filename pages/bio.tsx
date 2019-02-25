import Page from '../components/page';
import Head from '../components/head';
import Markdown from '../components/markdown';
import BioContent from '../content/bio.md';

const Bio = () => (
    <Page>
        <Head title="Dan Tombs’ Bio" description="Dan Tombs Bio, 2018" />
        <Markdown>
            <BioContent />
        </Markdown>
    </Page>
);

export default Bio;
