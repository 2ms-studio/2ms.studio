import NextApp, { Container } from 'next/app'
import Canvas from '../components/Canvas'

export default class App extends NextApp {
	public render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Canvas />
				<Container>
					<Component {...pageProps} />
				</Container>
			</>
		)
	}
}
