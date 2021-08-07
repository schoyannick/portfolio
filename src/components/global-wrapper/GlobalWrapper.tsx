import { AppProps } from 'next/dist/next-server/lib/router/router';
import { InferProps } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ColorTheme } from '../../redux/app/actions';
import { getColorTheme } from '../../redux/app/selectors';
import { darkTheme, GlobalStyles, lightTheme } from '../../utils/globalStyles';
import Header from '../header/Header';
import Footer from './footer/Footer';
import { StyledGlobalWrapper, StyledGlobalWrapperContent } from './GlobalWrapperStyles';

const propTypes = {
    
};

const GlobalWrapper: React.FC<InferProps<typeof propTypes>> = ({
    Component,
    pageProps,
}: AppProps) => {
    const colorTheme = useSelector(getColorTheme);
    
    return (
        <ThemeProvider
            theme={colorTheme === ColorTheme.LIGHT ? lightTheme : darkTheme}
        >
            <GlobalStyles/>
            <StyledGlobalWrapper>
                <Header/>
                <StyledGlobalWrapperContent
                    key={Component.displayName}
                >
                    <Component {...pageProps}/>
                </StyledGlobalWrapperContent>
            </StyledGlobalWrapper>

            <Footer/>
        </ThemeProvider>
    );
};
   

GlobalWrapper.displayName = 'GlobalWrapper';

export default GlobalWrapper;