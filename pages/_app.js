/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../src/redux/store';
import GlobalWrapper from '../src/components/global-wrapper/GlobalWrapper';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <GlobalWrapper Component={Component} pageProps={pageProps}/>
        </Provider>
    );
}

export default MyApp;
