import Head from './Head'
import Nav from './Nav'

export interface Props {
	white?: boolean
	children?: React.ReactNode
}

const Page: React.FC<Props> = ({ white, children }) => (
	<div>
		<Head />
		<Nav white={white} />
		{children}

		<style jsx global>{`
			 {
				body {
					background-color: ${white ? 'white' : 'black'};
				}
			}
		`}</style>
	</div>
)
export default Page
