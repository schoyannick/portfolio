/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ColorTheme } from '../src/redux/app/actions';

import { GlobalStyles, lightTheme, darkTheme } from '../src/utils/globalStyles';
import { store } from '../src/redux/store';
import Header from '../src/components/header/Header';

function MyApp({ Component, pageProps }) {
    const theme = store.getState().app.colorTheme;

    return (
        <Provider store={store}>
            <ThemeProvider
                theme={theme === ColorTheme.LIGHT ? lightTheme : darkTheme}
            >
                <GlobalStyles/>
                <Header/>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
