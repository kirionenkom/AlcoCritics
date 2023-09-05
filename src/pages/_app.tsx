import { JSXElementConstructor, ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';

interface MyAppProps {
	Component: JSXElementConstructor<ReactElement>;
	pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
	return (
		<Provider store={store}>
			<SessionProvider>
				<NextNProgress color="grey" />
				<Component {...pageProps} />
			</SessionProvider>
		</Provider>
	);
}
