import Head from 'next/head';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <Head>
                <title>2MS</title>
            </Head>
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
                div {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
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
        </div>
    );
}

export default Home;
