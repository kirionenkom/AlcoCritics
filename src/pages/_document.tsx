import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
					<Head>
						<link href="/style.css" rel="stylesheet" />
				</Head>
					<body>
					<Main />
					<NextScript />
					</body>
			</Html>
	)
	}
}