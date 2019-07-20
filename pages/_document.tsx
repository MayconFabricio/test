import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as React from "react";

//const WWW_ASSET = 'http://localhost:3000'



export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
					sheet.collectStyles(<App {...props} />),
			})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			// @ts-ignore
			styles: [...initialProps.styles, ...sheet.getStyleElement()],
		}
	}

	constructor(props) {
		// for emotion-js
		super(props);
		const { __NEXT_DATA__, ids } = props;
		if (ids) {
			__NEXT_DATA__.ids = ids;
		}
	}

	render() {

		const { styles } = this.props
		return (
			<html lang="pt-br">
				<Head>
					<meta httpEquiv="Content-Language" content="pt-br" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta name="theme-color" content="#fff" />
					<meta charSet="UTF-8" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<link rel="preconnect" href="http://192.168.10.100:8880" />
					<link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com/"
						crossOrigin="true"
					/>
 					<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" crossOrigin="true" />
				 {styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
