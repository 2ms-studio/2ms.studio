import css from 'styled-jsx/css'

export default css.global`
	html {
		line-height: 1.6;
		-webkit-text-size-adjust: 100%;
		min-height: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
		font-weight: normal;
		font-size: 1em;
	}
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
		min-height: 100%;
		position: relative;
		overflow-x: hidden;
		background-color: black;
		padding: 15px;
		color: white;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		cursor: none;
	}
	details,
	main {
		display: block;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	li {
		margin-bottom: 1rem;
	}
	hr {
		box-sizing: content-box;
		height: 0;
	}
	a {
		background-color: transparent;
	}
	b,
	strong {
		font-weight: bolder;
	}
	img {
		border-style: none;
	}
`
