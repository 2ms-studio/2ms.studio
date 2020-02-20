import NextApp from 'next/app'
import Router from 'next/router'
import Canvas from '../components/Canvas'
import Head from '../components/Head'
import Nav from '../components/Nav'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url))

export default class App extends NextApp {
	public render() {
		const { Component, pageProps, router } = this.props

		return (
			<>
				<Head />
				<div>
					<Canvas />
					<style jsx>{`
						div {
							z-index: 1;
						}
					`}</style>
				</div>

				<nav>
					<Nav />
					<style jsx>{`
						nav {
							position: ${router.pathname === '/' ? 'fixed' : 'relative'};
							z-index: 15;
							margin-bottom: 10px;
						}
						@media (min-width: 640px) {
							nav {
								position: fixed;
								width: 150px;
							}
						}
					`}</style>
				</nav>
				<div>
					<Component {...pageProps} />
					<style jsx>{`
							div {
								margin-top: ${router.pathname === '/' ? 0 : 10};px;
								z-index: 10;
								cursor: initial;
							}

							@media (min-width: 640px) {
								div {
									margin-left: 155px;
									max-width: 500px;
									margin-top: 0;
								}
							}

							@media (min-width: 840px) {
								div {
									margin-left: auto;
									margin-right: auto;
								}
							}
						`}</style>
				</div>
			</>
		)
	}
}
