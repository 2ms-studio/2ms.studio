const Markdown: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="markdown">
		{children}
		<style jsx global>{`
			.markdown {
				max-width: 60ch;
				position: relative;
				z-index: 10;
				margin-left: auto;
				margin-right: auto;
				padding: 2em;
				color: white;
				background-color: rgba(0, 0, 0, 0.4);
			}

			.markdown p,
			.markdown p::before,
			.markdown h2,
			.markdown h2::before,
			.markdown h1,
			.markdown h1::before {
				background-color: rgba(0, 0, 0, 0.6);
			}

			.markdown h1 {
				text-align: center;
				font-size: 150%;
				font-weight: normal;
				margin-bottom: 0;
				position: relative;
			}
			.markdown h2 {
				text-align: center;
				font-weight: normal;
				font-size: 12px;
				margin-bottom: 1.5rem;
				padding-bottom: 0.4em;
				position: relative;
			}
			.markdown p {
				display: inline;
				padding: 3px 0 4px;
				position: relative;
			}
			.markdown p::before,
			.markdown h2::before,
			.markdown h1::before {
				position: absolute;
				top: 0;
				bottom: 0;
				left: -6px;
				width: 6px;
				content: '';
			}

			.markdown p::after {
				display: block;
				content: '';
				clear: both;
				height: 1.4rem;
			}
			.markdown p:first-of-type {
				text-indent: 0;
			}
			.markdown em:first-child {
				text-transform: uppercase;
				font-style: normal;
			}
		`}</style>
	</div>
)

export default Markdown
