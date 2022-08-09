import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { RootStoreProvider } from 'providers/RootStoreProvider';
import 'styles/globals.scss';
import Modal from 'components/Modal';

function MyApp({ Component, pageProps }) {

	return (
		<RootStoreProvider hydrationData={pageProps.hydrationData}>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
			<Modal />
		</RootStoreProvider>
	);
}

export default MyApp;
