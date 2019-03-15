import PressLinks from '../dan-edits-these/press.md'

const Press: React.FC<{}> = () => (
	<div>
		<PressLinks />
		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
				mix-blend-mode: difference;
			}
			div :global(ul) {
				list-style-type: none;
			}
			div :global(li) {
				margin: 0;
				line-height: 1.3;
				margin-bottom: 10px;
			}
			div :global(a) {
				background-color: white;
				display: inline;
				mix-blend-mode: difference;
				color: black;
			}
			div :global(a:hover) {
				background-color: black;
				color: white;
			}
		`}</style>
	</div>
)

export default Press
