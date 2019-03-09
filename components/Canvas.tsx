import { useEffect, useRef, useState } from 'react'

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
					ctx.strokeStyle = '#000'
					ctx.beginPath()
					ctx.moveTo(x, y)
					ctx.lineTo(newX, newY)
					x = newX
					y = newY
					ctx.stroke()
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
		document.addEventListener('mousemove', handleMouseMove, {
			passive: true,
		})

		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

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
