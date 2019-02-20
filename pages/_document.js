import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
					@font-face {
						font-family: 'Inter var';
						font-weight: 100 900;
						font-style: normal;
						font-named-instance: 'Regular';
						src: url('https://rsms.me/inter/font-files/Inter-upright.var.woff2?v=3.3')
							format('woff2');
						font-display: block;
					}
					@font-face {
						font-family: 'Inter var';
						font-weight: 100 900;
						font-style: italic;
						font-named-instance: 'Italic';
						src: url('https://rsms.me/inter/font-files/Inter-italic.var.woff2?v=3.3')
							format('woff2');
						font-display: block;
					}
					/* based on normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
					html {
						line-height: 1.3;
						-webkit-text-size-adjust: 100%;
						font-size: 14px;
					}
					body {
						margin: 0;
						font-family: 'Inter var', Helvetica;
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
					hr {
						box-sizing: content-box;
						height: 0;
					}
					a {
						background-color: transparent;
					}
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					b,
					strong {
						font-weight: 600;
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
