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
			nav {
				position: relative;
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
				width: 50%;
			}
			@media (min-width: 640px) {
				nav {
					position: fixed;
				}
			}
		`}</style>
	</nav>
)

export default Nav
