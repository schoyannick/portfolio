/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Provider } from 'react-redux';

import GlobalWrapper from '../src/components/global-wrapper/GlobalWrapper';
import { useStore } from '../src/redux/store';

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <GlobalWrapper Component={Component} pageProps={pageProps}/>
        </Provider>
    );
}

export default MyApp;
