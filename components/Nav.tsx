import NavLink from './NavLink'

const Nav: React.FC = () => (
	<ul>
		<li className="logo">
			<NavLink href="/">2MS</NavLink>
		</li>
		<li>
			<NavLink href="/video">video</NavLink>
		</li>
		<li>
			<NavLink href="/design">design</NavLink>
		</li>
		<li>
			<NavLink href="/shop">shop</NavLink>
		</li>
		<li>
			<NavLink href="/about">about</NavLink>
		</li>
		<li>
			<NavLink href="/press">press</NavLink>
		</li>
		<li>
			<NavLink href="/contact">contact</NavLink>
		</li>

		<style jsx>{`
			ul {
				list-style: none;
				padding: 0;
			}

			li {
				margin: 0;
			}
		`}</style>
	</ul>
)

export default Nav
