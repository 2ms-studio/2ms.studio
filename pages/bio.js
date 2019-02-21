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
                padding: 0 2em;
            }

            p {
                text-indent: 2ch;
            }
            p:first-of-type {
                text-indent: 0;
            }
            p:first-of-type em {
                font-variant: small-caps;
                font-style: normal;
            }
        `}</style>
    </div>
);

export default Bio;
