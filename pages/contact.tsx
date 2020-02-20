import ContactLink from '../components/ContactLink'
import ContactItems from '../dan-edits-these/contact.mdx'

const Contact: React.FC = () => (
	<article>
		<dl>
			<ContactItems />
			<ContactLink title="Website by" href="https://sndrs.dev">
				sndrs.dev
			</ContactLink>
		</dl>
		<style jsx>{`
			dl {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(-1deg);
				background-color: white;
				padding: 1rem 2rem 2rem;
				z-index: 15;
				font-size: 14px;
				box-shadow: 15px 15px 0 rgba(255, 255, 255, 0.2);
				color: black;
				background-blend-mode: multiply;
			}
		`}</style>
	</article>
)

export default Contact
