import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="/style.css" rel="stylesheet" />
					<link
						rel="shortcut icon"
						href="/images/icon.png"
						type="image/x-icon"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
