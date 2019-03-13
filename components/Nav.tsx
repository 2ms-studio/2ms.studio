import NavLink from './NavLink'

const Nav: React.FC = () => (
	<>
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
				<NavLink href="/bio">bio</NavLink>
			</li>
			<li>
				<NavLink href="/press">press</NavLink>
			</li>
			<li>
				<NavLink href="/contact">contact</NavLink>
			</li>
		</ul>
		<style jsx>{`
			ul {
				list-style: none;
				padding: 0;
				display: flex;
				flex-direction: column;
			}
			li {
				margin: 0;
			}
		`}</style>
	</>
)

export default Nav
