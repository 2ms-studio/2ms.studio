import ActiveLink from './ActiveLink'

export interface Props {
	white?: boolean
}

const Nav: React.FC<Props> = ({ white }) => (
	<nav>
		<ul>
			<li>
				<ActiveLink href="/">home</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/video">video</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/design">design</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/press">press</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/bio">bio</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/contact">contact</ActiveLink>
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
				top: 3em;
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
			li {
				margin: 0;
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
