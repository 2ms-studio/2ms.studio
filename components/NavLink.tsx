import Link from 'next/link'
import { SingletonRouter, withRouter } from 'next/router'

export interface Props {
	router: SingletonRouter
	href: string
}

const NavLink: React.FC<Props> = ({ children, router, href }) => {
	return (
		<>
			<Link href={href}>
				<a className={router.pathname === href ? 'active' : ''}>{children}</a>
			</Link>

			<style jsx>{`
				a {
					color: black;
					font-weight: 600;
					font-size: 40px;
					line-height: 1;
					text-decoration: none;
					display: block;
					-webkit-font-smoothing: subpixel-antialiased;
				}

				a.active,
				a:hover {
					color: white;
					-webkit-font-smoothing: antialiased;
				}
			`}</style>
		</>
	)
}

export default withRouter(NavLink)
