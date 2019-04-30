import { useEffect, useRef, useState } from 'react'

const Canvas: React.FC = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const ref = useRef<HTMLCanvasElement>(null)

	function* getHue() {
		let i = 0
		let ascending = true
		while (true) {
			if (i === 255) {
				ascending = false
			}
			if (i === 0) {
				ascending = true
			}
			yield ascending ? i++ : i--
		}
	}

	useEffect(() => {
		const hue = getHue()

		const draw = (newX: number, newY: number) => {
			if (ref && ref.current) {
				const ctx = ref.current.getContext('2d')

				if (ctx) {
					// ctx.lineCap = 'square'
					window.requestAnimationFrame(() => {
						ctx.beginPath()
						ctx.moveTo(-500, 100)
						ctx.lineTo(newX, newY)

						ctx.strokeStyle = `hsla(${hue.next().value}, 100%, 50%, 0.6)`
						ctx.lineWidth = 3
						ctx.stroke()

						ctx.strokeStyle = 'black'
						ctx.lineWidth = 1
						ctx.stroke()
					})
				}
			}
		}

		const handleMouseMove = ({ clientX, clientY }: MouseEvent | Touch) => {
			draw(clientX, clientY)
		}

		const handleTouchMove = ({ changedTouches }: TouchEvent) => {
			Array.from(changedTouches).forEach(handleMouseMove)
		}

		document.addEventListener('mousemove', handleMouseMove, {
			passive: true,
		})
		document.addEventListener('touchmove', handleTouchMove, {
			passive: true,
		})

		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

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
