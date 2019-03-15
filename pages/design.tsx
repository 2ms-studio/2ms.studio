import DesignItems from '../dan-edits-these/design.mdx'

const Design: React.FC<{}> = () => (
	<div>
		<DesignItems />
		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
			}
		`}</style>
	</div>
)

export default Design
