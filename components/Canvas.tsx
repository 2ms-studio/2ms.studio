import throttle from 'just-throttle'
import { useEffect, useRef, useState } from 'react'
import random from '../lib/random'

const Canvas: React.FC = () => {
	let x = 0
	let y = 0
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const ref = useRef<HTMLCanvasElement>(null)

	const draw = (newX: number, newY: number) => {
		if (ref && ref.current) {
			const ctx = ref.current.getContext('2d')

			if (ctx) {
				window.requestAnimationFrame(() => {
					ctx.strokeStyle = `hsla(${random(0, 255)}, 100%, 50%, 0.6)`
					ctx.beginPath()
					ctx.moveTo(-500, 100)
					ctx.lineTo(newX, newY)
					ctx.stroke()
					ctx.strokeStyle = `white`
					ctx.beginPath()
					ctx.moveTo(x, y)
					ctx.lineTo(newX, newY)
					ctx.stroke()
					x = newX
					y = newY
				})
			}
		}
	}

	const handleMouseMove = throttle(
		({ clientX, clientY }: MouseEvent) => {
			if (x === 0 && y === 0) {
				x = clientX
				y = clientY
			}
			draw(clientX, clientY)
		},
		75,
		true,
	)

	const handleTouchMove = ({ changedTouches }: TouchEvent) => {
		Array.from(changedTouches).forEach(({ clientX, clientY }) =>
			handleMouseMove({ clientX, clientY }),
		)
	}

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove, {
			passive: true,
		})
		document.addEventListener('touchmove', handleTouchMove, {
			passive: true,
		})

		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

		if (ref && ref.current) {
			const ctx = ref.current.getContext('2d')

			if (ctx) {
				ctx.translate(0.5, 0.5)
			}
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('touchmove', handleTouchMove)
		}
	}, [])

	return (
		<>
			<canvas ref={ref} width={width} height={height} />
			<style jsx>{`
				canvas {
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					pointer-events: none;
					overflow: hidden;
				}
			`}</style>
		</>
	)
}

export default Canvas
