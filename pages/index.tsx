import Link from 'next/link';
import Page from '../components/page';

function Home() {
    return (
        <Page align="center" direction="row">
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
        </Page>
    );
}

export default Home;
