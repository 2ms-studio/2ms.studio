import Page from '../components/Page'

const Contact: React.FC = () => (
	<Page>
		<dl>
			<dt>email</dt>
			<dd>
				<a href="mailto:dan@2MS.studio">dan@2MS.studio</a>
			</dd>
			<dt>website by</dt>
			<dd>
				<a href="https://sndrs.dev">sndrs.dev</a>
			</dd>
		</dl>
		<style jsx global>{`
			dl {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: rgba(255, 255, 255, 0.95);
				padding: 2rem;
				z-index: 15;
				font-size: 14px;
			}

			dt {
				font-weight: bold;
				text-transform: uppercase;
			}

			dd + dt {
				margin-top: 1rem;
			}
		`}</style>
	</Page>
)

export default Contact
