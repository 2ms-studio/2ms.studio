import NextApp from 'next/app'
import Router from 'next/router'
import Canvas from '../components/Canvas'
import Head from '../components/Head'
import Nav from '../components/Nav'
import reset from '../lib/css_reset'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url))

export default class App extends NextApp {
	public render() {
		const { Component, pageProps, router } = this.props

		return (
			<div>
				<style jsx global>
					{reset}
				</style>
				<Head />
				<a href="#content">Skip to content</a>
				<nav>
					<Nav />
				</nav>
				<main id="content">
					<Component {...pageProps} className="section" />
				</main>
				<Canvas />
				<style jsx>{`
					div {
						display: flex;
						flex-direction: column;
					}

					a {
						border: 0;
						clip: rect(1px, 1px, 1px, 1px);
						clip-path: inset(50%);
						height: 1px;
						margin: -1px;
						overflow: hidden;
						padding: 0;
						position: absolute;
						width: 1px;
						word-wrap: normal !important;
					}

					nav {
						position: ${router.pathname === '/' ? 'fixed' : 'relative'};
						z-index: 10;
						margin-bottom: 10px;
					}

					main {
						z-index: 10;
						cursor: initial;
						flex: 1;
					}

					div > :global(canvas) {
						position: fixed;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						pointer-events: none;
						overflow: hidden;
						z-index: 1;
					}

					@media (min-width: 640px) {
						div {
							flex-direction: row;
						}

						nav {
							position: fixed;
							width: 150px;
						}

						main {
							margin-left: 155px;
							max-width: 500px;
							margin-top: 0;
						}
					}

					@media (min-width: 840px) {
						main {
							margin-left: auto;
							margin-right: auto;
						}
					}
				`}</style>
			</div>
		)
	}
}
