interface Props {
	children?: React.ReactNode
}

export const Item: React.FC = ({ children, ...props }: Props) => {
	return <div {...props}>{children}</div>
}

export const Description: React.FC = ({ children, ...props }: Props) => (
	<div {...props}>{children}</div>
)

export const Info: React.FC = ({ children, ...props }: Props) => (
	<div {...props}>{children}</div>
)
