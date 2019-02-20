import Head from 'next/head';
import Bio from '../content/bio.md';

import { resolve } from 'styled-jsx/css';

export default () => (
	<div id="page">
		<Head>
			<title>Dan Tombs’ Bio</title>
		</Head>
		<Bio />
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
