import * as React from 'react'
import type { AppProps } from 'next/app'
import Seo from '@components/cms/Seo'
import NProgressBar from '@components/ui/NProgressBar'
import '@styles/index.css'

export default function AppRoot({
	Component,
	pageProps,
}: AppProps): JSX.Element {
	const { seo, ...props } = pageProps
	return (
		<>
			<NProgressBar />
			<Seo {...seo} />
			<Component {...props} />
		</>
	)
}
