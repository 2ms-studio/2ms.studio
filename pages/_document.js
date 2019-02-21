import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                    />
                    <link rel="dns-prefetch" href="https://rsms.me" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx global>{`
                    /* based on normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
                    html {
                        line-height: 1.4;
                        -webkit-text-size-adjust: 100%;
                    }
                    body {
                        margin: 0;
                        font-family: 'Times New Roman', serif;
                    }
                    details,
                    main {
                        display: block;
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    p,
                    ul,
                    li {
                        font-weight: normal;
                        font-size: 1em;
                        margin: 0;
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    li {
                        margin-bottom: 1rem;
                    }

                    h1 {
                        text-align: center;
                        font-variant: small-caps;
                        font-size: 150%;
                        font-weight: normal;
                    }
                    hr {
                        box-sizing: content-box;
                        height: 0;
                    }
                    a {
                        background-color: transparent;
                    }
                    b,
                    strong {
                        font-weight: bolder;
                    }
                    img {
                        border-style: none;
                    }
                `}</style>
            </html>
        );
    }
}

export default MyDocument;
