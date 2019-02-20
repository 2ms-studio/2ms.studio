import Head from 'next/head';

function IndexPage() {
    return (
        <>
            <Head>
                <title>Showreel</title>
                {/* hide the page from search engine results */}
                <meta name="robots" content="noindex" />
            </Head>
            <div id="page">
                <div id="wrapper">
                    <iframe
                        src="https://player.vimeo.com/video/115137851?color=9d00ff&title=0&byline=0&portrait=0"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                    />
                </div>
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
            <style jsx global>{`
                body {
                    margin: 0;
                    background-color: #101010;
                }
                #page {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #wrapper {
                    padding: 56.25% 0 0 0;
                    position: relative;
                    max-width: 640px;
                    flex: 1;
                }
                iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    );
}

export default IndexPage;
