import 'styles/globals.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</React.Fragment>
	);
}

export default MyApp;
