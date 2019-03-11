import Head from './Head'
import Nav from './Nav'

export interface Props {
	children?: React.ReactNode
}

const Page: React.FC<Props> = ({ children }) => (
	<div>
		<Head />
		<Nav />
		{children}
	</div>
)
export default Page
