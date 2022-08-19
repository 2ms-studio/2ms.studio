interface Props {
	title: string
	href: string
	children?: React.ReactNode
}

const ContactLink: React.FC<Props> = ({ href, children, title }) => (
	<>
		<dt>{title}</dt>
		<dd>
			<a href={href} rel="noopener noreferrer" target="_blank">
				{children}
			</a>
		</dd>
		<style jsx>{`
			dt {
				font-weight: bold;
				text-transform: uppercase;
				margin-top: 1rem;
			}

			a,
			a:visited,
			a:active {
				color: #00f;
			}
		`}</style>
	</>
)

export default ContactLink
