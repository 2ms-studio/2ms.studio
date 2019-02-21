import Head from 'next/head';
import BioContent from '../content/bio.md';

const Bio = () => (
    <div id="page">
        <Head>
            <title>Dan Tombs’ Bio</title>
        </Head>
        <BioContent />
        <style jsx global>{`
            #page {
                max-width: 60ch;
                margin: 2em auto;
            }
            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            li {
                margin-bottom: 1rem;
            }
        `}</style>
    </div>
);

export default Bio;
