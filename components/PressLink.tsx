interface Props {
	href: string
	publication: string
	children?: React.ReactNode
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
				font-size: 13px;
				font-weight: 300;
				position: relative;
				-webkit-font-smoothing: none;
				font-family: verdana;
			}
			a {
				display: inline-block;
				padding-left: 10px;
				padding-right: 10px;
				padding-bottom: 2px;
				text-decoration: none;
				float: right;
				margin-left: 15px;
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
		`}</style>
	</p>
)

export default PressLink
