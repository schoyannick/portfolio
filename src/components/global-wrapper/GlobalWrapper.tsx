import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ColorTheme } from '../../redux/app/actions';
import { getColorTheme } from '../../redux/app/selectors';
import { darkTheme, GlobalStyles, lightTheme } from '../../utils/globalStyles';
import Header from '../header/Header';
import { StyledGlobalWrapper, StyledGlobalWrapperContent } from './GlobalWrapperStyles';

const GlobalWrapper: React.FC = ({
    children,
}) => {
    const colorTheme = useSelector(getColorTheme);

    return (
        <ThemeProvider
            theme={colorTheme === ColorTheme.LIGHT ? lightTheme : darkTheme}
        >
            <GlobalStyles/>
            <StyledGlobalWrapper>
                <Header/>
                <StyledGlobalWrapperContent>
                    {children}
                </StyledGlobalWrapperContent>
            </StyledGlobalWrapper>
        </ThemeProvider>
    );
};
   

GlobalWrapper.displayName = 'GlobalWrapper';

export default GlobalWrapper;