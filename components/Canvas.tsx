import throttle from 'just-throttle'
import { useEffect, useRef, useState } from 'react'
import random from '../lib/random'

const Canvas: React.FunctionComponent = () => {
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
					ctx.strokeStyle = `hsla(${random(0, 255)}, 100%, 50%, 0.5)`
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

	const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
		if (x === 0 && y === 0) {
			x = clientX
			y = clientY
		}
		draw(clientX, clientY)
	}

	useEffect(() => {
		document.addEventListener(
			'mousemove',
			throttle(handleMouseMove, 75, true),
			{
				passive: true,
			},
		)

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
		}
	}, [])

	return (
		<div>
			<canvas ref={ref} width={width} height={height} />
			<style jsx>{`
				div {
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					pointer-events: none;
					overflow: hidden;
					z-index: 5;
				}
			`}</style>
		</div>
	)
}

export default Canvas

// export default class Canvas extends PureComponent<Props, State> {
// 	ref = createRef<HTMLCanvasElement>()
// 	x = 0
// 	y = 0
// 	state = { width: 0, height: 2600 }

// 	constructor(props: Props) {
// 		super(props)

// 		this.handleMouseMove = this.handleMouseMove.bind(this)
// 		// this.handleScroll = this.handleScroll.bind(this);
// 	}

// 	// handleScroll() {
// 	//     if (this.x && this.y) {
// 	//         const ctx = this.ref.current.getContext('2d');
// 	//         const newX = this.x - (this.x - window.scrollX);
// 	//         const newY = this.y - (this.y - window.scrollY);

// 	//         ctx.beginPath();
// 	//         ctx.moveTo(this.x, this.y);
// 	//         ctx.lineTo(newX, newY);
// 	//         ctx.stroke();
// 	//         this.x = newX;
// 	//         this.y = newY;
// 	//     }
// 	// }

// 	componentDidMount() {
// 		this.setState({
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		})
// 		document.addEventListener('mousemove', this.handleMouseMove, {
// 			passive: true,
// 		})
// 		// window.addEventListener('scroll', this.handleScroll, {
// 		//     passive: true,
// 		// });
// 	}

// 	componentWillUnmount() {
//
// 		// window.removeEventListener('scroll', this.handleScroll);
// 	}

// 	render() {
// 		return (

// 		)
// 	}
// }
