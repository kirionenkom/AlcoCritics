import {JSXElementConstructor, ReactElement} from "react";
import {Provider} from "react-redux";
import store from "@/redux/store";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/layout/layout";

interface MyAppProps {
	Component: JSXElementConstructor<ReactElement>,
	pageProps: any,
}


export default function MyApp({ Component, pageProps}: MyAppProps) {
	return (
		<Provider store={store}>
			<NextNProgress color="grey"/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

