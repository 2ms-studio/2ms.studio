export const Item: React.FC = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}

export const Description: React.FC = ({ children, ...props }) => (
	<div {...props}>{children}</div>
)

export const Info: React.FC = ({ children, ...props }) => (
	<div {...props}>{children}</div>
)
