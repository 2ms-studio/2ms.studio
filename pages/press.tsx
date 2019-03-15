import PressLinks from '../dan-edits-these/press.md'

const Press: React.FC<{}> = () => (
	<div>
		<PressLinks />
		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
			}
			div :global(p) {
				margin-bottom: 25px;
				background-color: rgba(255, 255, 255, 0.8);
				color: black;
				padding-left: 5px;
				padding-bottom: 10px;
				font-size: 14px;
				font-weight: 300;
				box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
			}
			div :global(a) {
				background-color: black;
				color: white;
				display: inline-block;
				padding-left: 10px;
				padding-bottom: 2px;
				text-decoration: none;
				float: right;
				margin-left: 15px;
				font-style: italic;
			}
			div :global(a::after) {
				content: ' ⇾';
			}
			div :global(a:hover) {
				background-color: black;
				color: white;
				text-decoration: underline;
			}
		`}</style>
	</div>
)

export default Press
