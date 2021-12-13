/* eslint-disable @typescript-eslint/ban-ts-comment,  @typescript-eslint/explicit-module-boundary-types,  react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
					<meta name="msapplication-TileColor" content="#2b5797" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body className="h-full min-h-screen font-sans bg-gray-50">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
