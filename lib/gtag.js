export const GA_TRACKING_ID = 'UA-12705318-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url, // eslint-disable-line @typescript-eslint/camelcase
	})
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
	window.gtag('event', action, {
		event_category: category, // eslint-disable-line @typescript-eslint/camelcase
		event_label: label, // eslint-disable-line @typescript-eslint/camelcase
		value: value,
	})
}
