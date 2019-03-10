import { useEffect, useState } from 'react'
import random from '../lib/random'

export interface Props {
	content: string
	color: string
}

const peak = 20

const Site: React.FC<Props> = ({ content, color }) => {
	let min = 0
	let max = 0
	let offset = 0
	let scrolling: number

	const [x, setX] = useState(0)
	const [duration, setDuration] = useState(0)

	const handleScroll = () => {
		const absMin = Math.abs(min)
		const freq = (absMin + max) / 2

		scrolling = window.setTimeout(function() {
			setDuration(1000)
			setX(0)
		}, 60)

		scrolling = window.requestAnimationFrame(() => {
			window.clearTimeout(scrolling)
			setDuration(250)
			setX(
				Math.round(
					freq * Math.sin(window.scrollY * 0.01 + offset) +
						(absMin - freq),
				),
			)
		})
	}

	useEffect(() => {
		if (color !== 'main') {
			min = random(-peak, peak)
			max = random(-peak, peak)
			offset = random(0, 5)
		}
	}, [])

	useEffect(() => {
		if (color !== 'main') {
			window.addEventListener('scroll', handleScroll, {
				passive: true,
			})

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return (
		<>
			<div
				dangerouslySetInnerHTML={{ __html: content }}
				style={{
					transform: `translateX(${x}px)`,
					transitionDuration: `${duration}ms`,
				}}
			/>
			<style jsx>{`
				div {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					color: ${color === 'main' ? '#fff' : color}};
					-webkit-font-smoothing: antialiased;
					transition-property: transform;
					transition-timing-function: linear;
					opacity: ${color === 'main' ? 1 : 0.65};
					max-width: 80ch;
				}

				div,
				div :global(*) {
					font-weight: bold !important;
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
					font-size: 60px !important;
					line-height: 0.9 !important;
					letter-spacing: -3px;
					word-spacing: 0.3em;
					text-transform: uppercase;
				}
			`}</style>
		</>
	)
}

export default Site
