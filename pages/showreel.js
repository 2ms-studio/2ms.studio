import Head from 'next/head';

function IndexPage() {
    return (
        <>
            <Head>
                <title>Dan Tombs Showreel</title>
                {/* hide the page from search engine results */}
                <meta name="robots" content="noindex" />
            </Head>
            <div id="page">
                <h1>Dan Tombs Showreel, 2018</h1>
                <div id="wrapper">
                    <iframe
                        src="https://player.vimeo.com/video/309567641?color=fff&title=0&byline=0&portrait=0"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                    />
                </div>
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
            <style jsx global>{`
                #page {
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding: 2em;
                }
                #wrapper {
                    padding: 56.25% 0 0 0;
                    position: relative;
                    width: 100%;
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
