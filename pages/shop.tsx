import Image from '../components/Image'
import items from '../dan-edits-these/shop.json'

const Item: React.FC = ({ children }) => (
	<section>
		{children}
		<style jsx>{`
			section {
				padding-top: 1rem;
			}
			section + section {
				padding-top: 1rem;
				margin-top: 2rem;
				border-top: 1px dashed black;
			}
		`}</style>
	</section>
)

const Title: React.FC<{ total: number }> = ({ total, children, ...props }) => (
	<h2 {...props}>
		{children} <span>edition of {total}</span>
		<style jsx>{`
			h2 {
				font-size: 2rem;
				line-height: 1.1;
				padding-top: 0.8rem;
				padding-bottom: 1rem;
				margin: 0;
				font-family: Arial;
			}
			span {
				font-weight: normal;
				font-size: 11px;
				font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
				display: block;
				padding-top: 1.1rem;
			}
		`}</style>
	</h2>
)

const Description: React.FC<{ description: string[] }> = ({ description }) => (
	<>
		{description.map((p, i) => (
			<p key={i}>{p}</p>
		))}
		<style jsx>{`
			p {
				padding-top: 1rem;
				font-style: italic;
				line-height: 1.3;
			}
		`}</style>
	</>
)

const Inventory: React.FC<{
	inventory: Array<{ description: string; total: number; remaining: number }>
}> = (props) => (
	<ul>
		{props.inventory.map((invItem) => (
			<li key={invItem.description}>
				{invItem.description}
				<span>
					{invItem.remaining}/{invItem.total}
				</span>
			</li>
		))}
		<style jsx>{`
			ul {
				list-style: none;
			}
			li {
				margin: 0;
			}
			span {
				font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
				font-size: 10px;
				padding-left: 1ch;
			}
		`}</style>
	</ul>
)

const Shop = () => (
	<div>
		<h1>Limited edition prints for sale</h1>
		<h2>Original photography by Dan Tombs</h2>
		<aside>
			<p>
				To order, email <a href="mailto:info@2ms.tv">info@2ms.tv</a> with your
				choice of image and your shipping address.
			</p>
			<p>
				I will reply with confirmation, method of payment and accurate postage
				costs.
			</p>
		</aside>

		{items.map((item) => (
			<Item key={item.title}>
				<Title total={item.inventory.reduce((a, b) => a + b.total, 0)}>
					{item.title}
				</Title>
				<Image src={item.image} width={468} />
				<Description description={item.description} />
				<dl>
					<dt>media</dt>
					<dd>{item.medium}</dd>
					<dt>dimensions</dt>
					<dd>{item.dimensions}</dd>
					<dt>postage</dt>
					<dd>{item.postage}</dd>
					<dt>inventory</dt>
					<dd>
						<Inventory inventory={item.inventory}></Inventory>
					</dd>
				</dl>
			</Item>
		))}

		<style jsx>{`
			div {
				background-color: white;
				color: black;
				padding: 1rem;
				font-family: serif;
			}

			h1 {
				text-align: center;
				font-weight: 300;
				position: relative;
				letter-spacing: -0.01em;
				font-size: 150%;
				line-height: 1;
				padding-top: 1rem;
				font-family: Arial;
			}

			@media (min-width: 640px) {
				h1 {
					font-size: 200%;
				}
			}

			h2 {
				text-align: center;
				line-height: 1.3;
				font-size: 75%;
				font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
				margin-bottom: 2rem;
			}

			p + p {
				padding-top: 1rem;
			}

			aside {
				padding: 0.5rem;
				border: 1px dashed black;
				font-family: serif;
			}

			dl {
				// padding-top: 1rem;
			}

			// dt::before {
			// 	content: '–';
			// 	display: block;
			// }

			dt::after {
				content: ':';
			}

			dt {
				padding-top: 1.6rem;
				font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
				font-size: 10px;
				text-transform: uppercase;
				letter-spacing: 0.03em;
				font-weight: bold;
			}

			dd {
				font-family: serif;
				font-size: 14px;
				line-height: 1.3;
			}
		`}</style>
	</div>
)

export default Shop
