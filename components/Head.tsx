import NextHead from 'next/head'
import { withRouter } from 'next/router'
import meta from '../dan-edits-these/meta.json'
import { GA_TRACKING_ID } from '../lib/gtag'

export interface Props {
	title?: string
	description?: string
}

const Head: React.FC<Props> = ({
	router,
	title = router.pathname.substr(1),
	description = meta.description.default,
	children,
} = {}) => (
	<>
		<NextHead>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
			<meta charSet="utf-8" />
			<meta name="description" content={description} />
			<title>{['2MS', title].filter(Boolean).join(' · ')}</title>
			<meta property="og:site_name" content="2MS.studio" />
			<meta
				property="og:title"
				content={['2MS', title].filter(Boolean).join(' · ')}
			/>
			<meta property="og:description" content={description} />
			<meta
				property="og:url"
				content={`https://www.2ms.studio${router.asPath}`}
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/twoms/image/upload/f_auto,q_100,c_scale,w_300/dt_press_shot_sq_02.jpg"
			/>
			<meta property="og:image:width" content="300" />
			<meta property="og:image:height" content="300" />
			<meta
				property="og:image"
				content="https://res.cloudinary.com/twoms/image/upload/f_auto,q_100,c_scale,w_1000/dt_press_shot_sq_02.jpg"
			/>
			<meta property="og:image:width" content="1000" />
			<meta property="og:image:height" content="1000" />
			<meta
				property="og:image"
				content="https://res.cloudinary.com/twoms/image/upload/f_auto,q_100,c_scale,w_2000/dt_press_shot_sq_02.jpg"
			/>
			<meta property="og:image:width" content="2000" />
			<meta property="og:image:height" content="2000" />

			<meta property="og:type" content="website" />

			{children}

			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
				}}
			/>
		</NextHead>
		<style jsx global>
			{`
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
			`}
		</style>
	</>
)

export default withRouter(Head)
