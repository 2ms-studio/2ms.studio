const Markdown: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="markdown">
		{children}
		<style jsx global>{`
			.markdown {
				max-width: 80ch;
				position: relative;
				z-index: 10;
				margin-left: auto;
				margin-right: auto;
				padding: 2em;
				color: white;
				mix-blend-mode: difference;
			}
			.markdown p {
				text-indent: 2ch;
			}
			.markdown p:first-of-type {
				text-indent: 0;
			}
			.markdown h1 + p em {
				font-variant: small-caps;
				font-style: normal;
			}
		`}</style>
	</div>
)

export default Markdown
