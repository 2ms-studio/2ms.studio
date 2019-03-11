declare module 'just-throttle' {
	let throttle: (
		fn: function,
		interval: number,
		callFirst?: boolean,
	) => function
	export default throttle
}
