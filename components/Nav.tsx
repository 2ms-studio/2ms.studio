import NavLink from './NavLink'

const Nav: React.FC = () => (
	<nav>
		<ul>
			<li>
				<NavLink href="/">home</NavLink>
			</li>
			<li>
				<NavLink href="/video">videos</NavLink>
			</li>
			<li>
				<NavLink href="/design">design</NavLink>
			</li>
			<li>
				<NavLink href="/press">press</NavLink>
			</li>
			<li>
				<NavLink href="/bio">bio</NavLink>
			</li>
			<li>
				<NavLink href="/contact">contact</NavLink>
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
