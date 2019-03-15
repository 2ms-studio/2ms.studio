const Contact: React.FC = () => (
	<>
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
		<style jsx>{`
			dl {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(-1deg);
				background-color: white;
				padding: 2rem;
				z-index: 15;
				font-size: 14px;
				box-shadow: 15px 15px 0 rgba(255, 255, 255, 0.2);
				color: black;
				background-blend-mode: multiply;
			}

			dt {
				font-weight: bold;
				text-transform: uppercase;
			}

			dd + dt {
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

export default Contact
