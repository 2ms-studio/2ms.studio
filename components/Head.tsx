import NextHead from 'next/head'
import { SingletonRouter, withRouter } from 'next/router'
import collaborators from '../dan-edits-these/collaborators.json'
import meta from '../dan-edits-these/meta.json'
import { GA_TRACKING_ID } from '../lib/gtag'

export interface Props {
	title?: string
	description?: string
	router: SingletonRouter
	children?: React.ReactNode
}

const Head: React.FC<Props> = ({
	router,
	title = router.pathname.substr(1),
	description = meta.description.default +
		' for ' +
		collaborators.sort().join(', ') +
		'.',
	children,
}) => (
	<NextHead>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<meta name="description" content={description} />
		<title>{['2MS', title].filter(Boolean).join(' · ')}</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
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

		<link rel="canonical" href={`https://www.2ms.studio${router.asPath}`} />

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
)

export default withRouter(Head)
