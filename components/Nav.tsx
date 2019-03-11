import Link from 'next/link'

export interface Props {
	white?: boolean
}

const Nav: React.FC<Props> = ({ white }) => (
	<nav>
		<ul>
			<li>
				<Link href="/">
					<a>/</a>
				</Link>
			</li>
			<li>
				<Link href="/video">
					<a>/video</a>
				</Link>
			</li>
			<li>
				<Link href="/bio">
					<a>/bio</a>
				</Link>
			</li>
			<li>
				<Link href="/contact">
					<a>/contact</a>
				</Link>
			</li>
		</ul>
		<style jsx>{`
			@keyframes freakout {
				0% {
					color: rgba(255, 0, 0, 0.5);
				}
				50% {
					color: rgba(0, 255, 0, 0.5);
				}
				100% {
					color: rgba(0, 0, 255, 0.5);
				}
			}
			nav {
				position: fixed;
				top: 1em;
				left: 1em;
				display: inline-block;
				z-index: 15;
			}
			ul {
				list-style: none;
				padding: 0;
				display: flex;
				flex-direction: column;
			}
			a {
				color: ${white ? 'white' : 'black'};
				font-weight: bold;
				font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-size: 40px;
				line-height: 0.9;
				letter-spacing: -3px;
				word-spacing: 0.3em;
				text-transform: uppercase;
				text-decoration: none;
				animation-duration: 50ms;
				animation-iteration-count: infinite;
				display: block;
			}
			a:hover {
				color: ${white
					? 'rgba(0, 0, 0, 0.5)'
					: 'rgba(255, 255, 255, 0.5)'};
			}
			@media (min-width: 12450px) {
				nav {
					top: 2em;
					left: 2em;
				}
				a {
					font-size: 100px;
				}
			}
		`}</style>
	</nav>
)

export default Nav
