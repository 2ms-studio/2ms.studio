import { Dispatch, useEffect, useState } from 'react'
import random from '../lib/random'

interface RGBSetting {
	[key: string]: number
	red: number
	lime: number
	blue: number
}

type XState = [RGBSetting, Dispatch<RGBSetting>]

const peak = 15

const RGBSplit: React.FC = ({ children }) => {
	let min: RGBSetting = { red: 0, lime: 0, blue: 0 }
	let max: RGBSetting = { red: 0, lime: 0, blue: 0 }
	let offset: RGBSetting = { red: 0, lime: 0, blue: 0 }
	let scrolling: number

	const [x, setX]: XState = useState({ red: 0, lime: 0, blue: 0 })
	const [duration, setDuration] = useState(0)

	const [splitIt, setSplit] = useState(false)

	const getX = (colour: 'red' | 'lime' | 'blue') => {
		const absMin = Math.abs(min[colour])
		const freq = (absMin + max[colour]) / 2
		return Math.round(
			freq * Math.sin(window.scrollY * 0.01 + offset[colour]) +
				(absMin - freq),
		)
	}

	const handleScroll = () => {
		window.clearTimeout(scrolling)

		scrolling = window.requestAnimationFrame(() => {
			setDuration(250)
			setX({ red: getX('red'), lime: getX('lime'), blue: getX('blue') })
		})

		scrolling = window.setTimeout(function() {
			setDuration(350)
			setX({ red: 0, lime: 0, blue: 0 })
		}, 60)
	}

	useEffect(() => {
		min = {
			red: random(-peak, peak),
			lime: random(-peak, peak),
			blue: random(-peak, peak),
		}
		max = {
			red: random(-peak, peak),
			lime: random(-peak, peak),
			blue: random(-peak, peak),
		}
		offset = {
			red: random(0, 5),
			lime: random(0, 5),
			blue: random(0, 5),
		}

		window.addEventListener('scroll', handleScroll, {
			passive: true,
		})

		setSplit(true)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="wrapper">
			{splitIt &&
				['red', 'lime', 'blue'].map(color => (
					<div
						className={`split`}
						key={color}
						style={{
							transform: `translateX(${x[color]}px)`,
							transitionDuration: `${duration}ms`,
							color,
						}}
					>
						{children}
					</div>
				))}
			{children}
			<style jsx>{`
				.wrapper {
					position: relative;
					mix-blend-mode: difference;
				}
				.split {
					position: absolute;
					top: 0;
					left: 0;
					transition-property: transform;
					transition-timing-function: linear;
					opacity: 0.7;
					will-change: transform;
				}

				.split :global(*) {
					color: currentColor !important;
				}
			`}</style>
		</div>
	)
}

export default RGBSplit
