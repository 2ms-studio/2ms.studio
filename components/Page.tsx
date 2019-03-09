import Head from './Head'

export interface Props {
	align?: string
	direction?: string
	children?: React.ReactNode
}

const Page: React.FC<Props> = ({
	align = 'flex-start',
	direction = 'column',
	children,
} = {}) => (
	<div>
		<Head />
		{children}
		<style jsx>{`
            {/* div {
                min-height: 100vh;
                display: flex;
                flex-direction: ${direction};
                align-items: center;
                justify-content: ${align};
                padding: 2em;
                position: relative;
            } */}
        `}</style>
	</div>
)
export default Page
