import Head from 'next/head';

export default ({ title, description = '2MS.studio', children } = {}) => (
    <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <title>{['2MS', title].filter(Boolean).join(' // ')}</title>
            {children}
        </Head>
        <style jsx global>
            {`
                html {
                    line-height: 1.4;
                    -webkit-text-size-adjust: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                    margin: 0;
                    padding: 0;
                    font-weight: normal;
                    font-size: 1em;
                }
                body {
                    font-family: 'Times New Roman', serif;
                    height: 100%;
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
            `}
        </style>
    </>
);
