import { InferProps } from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { ColorTheme, setMetrics } from '../../redux/app/actions';
import { getColorTheme, getIsOverlayShown } from '../../redux/app/selectors';
import { darkTheme, GlobalStyles, lightTheme } from '../../utils/globalStyles';
import Header from '../header/Header';
import Footer from './footer/Footer';
import { StyledGlobalWrapper, StyledGlobalWrapperContent } from './StypedGlobalWrapper';
import Overlay from './overlay/Overlay';
import Contact from './contact/Contact';

const propTypes = {
    
};

const GlobalWrapper: React.FC<InferProps<typeof propTypes>> = ({
    Component,
    pageProps,
}: AppProps) => {
    const dispatch = useDispatch();
    const colorTheme = useSelector(getColorTheme);
    const isOverlayShown = useSelector(getIsOverlayShown);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setMetrics({
                width: window.innerWidth,
                height: window.innerHeight,
            }));
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);
    
    return (
        <ThemeProvider
            theme={colorTheme === ColorTheme.LIGHT ? lightTheme : darkTheme}
        >
            <GlobalStyles
                isOverlayShown={isOverlayShown}
            />
            <StyledGlobalWrapper>
                <Overlay/>
                <Header/>
                <StyledGlobalWrapperContent
                    key={Component.displayName}
                >
                    <Component {...pageProps}/>
                </StyledGlobalWrapperContent>
            </StyledGlobalWrapper>

            <Contact/>
            <Footer/>
        </ThemeProvider>
    );
};
   

GlobalWrapper.displayName = 'GlobalWrapper';

export default GlobalWrapper;