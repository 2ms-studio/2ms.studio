interface Props {
	href: string
	publication: string
}

const PressLink: React.FC<Props> = ({ href, children, publication }) => (
	<p>
		<a href={href} rel="noopener noreferrer" target="_blank">
			{publication}
		</a>
		{children}
		<style jsx>{`
			p {
				margin-bottom: 25px;
				background-color: white;
				color: black;
				padding-left: 5px;
				padding-bottom: 10px;
				font-size: 14px;
				font-weight: 300;
				position: relative;
			}
			a {
				background-color: black;
				color: white;
				display: inline-block;
				padding-left: 10px;
				padding-bottom: 2px;
				text-decoration: none;
				float: right;
				margin-left: 15px;
				font-style: italic;
			}
			a::before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
			}
			a::after {
				content: ' ⇾';
			}
			a:hover {
				background-color: black;
				color: white;
				text-decoration: underline;
			}
			a:hover::before {
				background-color: black;
				mix-blend-mode: color-burn;
			}
		`}</style>
	</p>
)

export default PressLink
