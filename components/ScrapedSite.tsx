import { useEffect, useState } from 'react'
import random from '../lib/random'

export interface Props {
	content: string
	color: string
}

const Site: React.FC<Props> = ({ content, color }) => {
	const [animation, setAnimation] = useState({
		duration: 0,
		first: 0,
		second: 0,
		third: 0,
		fourth: 0,
		fifth: 0,
	})

	useEffect(() => {
		if (color !== 'white') {
			setAnimation({
				duration: random(25, 40),
				first: random(-40, 40),
				second: random(-40, 40),
				third: random(-40, 40),
				fourth: random(-40, 40),
				fifth: random(-40, 40),
			})
		}
	}, [])

	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: content }} />
			<style jsx>{`
				@keyframes move {
					0% {
						transform: translateX(${animation.first}px);
					}
					10% {
						transform: translateX(${animation.second}px);
					}
					50% {
						transform: translateX(${animation.third}px);
					}
					80% {
						transform: translateX(${animation.fourth}px);
					}
					100% {
						transform: translateX(${animation.fifth}px);
					}
				}
				div {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					color: ${color};
					-webkit-font-smoothing: antialiased;
					animation-name: move;
					animation-duration: ${animation.duration}s;
					animation-iteration-count: infinite;
					animation-direction: alternate;
					animation-timing-function: ease-in-out;
					animation-fill-mode: forwards;
					opacity: ${color === 'white' ? 0.7 : 0.4};
					max-width: 80ch;
				}

				div :global(*) {
					font-weight: normal !important;
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
					font-size: 60px !important;
					line-height: 0.55 !important;
					letter-spacing: -3px;
					word-spacing: 0.3em;
				}
			`}</style>
		</>
	)
}

export default Site
