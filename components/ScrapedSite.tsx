import { useEffect, useState } from 'react'
import random from '../lib/random'

export interface Props {
	content: string
	color: string
}

const peak = 15

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

		window.clearTimeout(scrolling)

		scrolling = window.requestAnimationFrame(() => {
			setDuration(250)
			setX(
				Math.round(
					freq * Math.sin(window.scrollY * 0.01 + offset) +
						(absMin - freq),
				),
			)
		})

		scrolling = window.setTimeout(function() {
			setDuration(350)
			setX(0)
		}, 60)
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
					text-shadow: ${color === 'main'
						? 'rgba(0, 0, 0, 0.7) 1px 1px 0px'
						: 'none'}};
					-webkit-font-smoothing: antialiased;
					transition-property: transform;
					transition-timing-function: linear;
					opacity: ${color === 'main' ? 1 : 0.7};
					will-change: transform;
				}

				div,
				div :global(*) {
					font-weight: normal !important;
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
					font-size: 16px !important;
				}

				div :global(> *) {
					margin-bottom: 1.4rem;
				}
			`}</style>
		</>
	)
}

export default Site
