import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { getColorTheme } from '../../redux/app/selectors';
import { ColorTheme } from '../../redux/app/actions';
import { darkTheme, lightTheme } from '../../utils/globalStyles';
import HomeAbout from './home-about/HomeAbout';
import { StyledHomeWrapper } from './StyledHome';
import HomeTerminal from './home-terminal/HomeTerminal';

const Home: React.FC = () => {
    const colorTheme = useSelector(getColorTheme);
    
    const theme = createTheme({
        palette: {
            primary: {
                main: colorTheme === ColorTheme.LIGHT ? lightTheme.primary : darkTheme.primary,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <StyledHomeWrapper>
                <HomeAbout/>
                <HomeTerminal/>
            </StyledHomeWrapper>
        </ThemeProvider>
    );
};
export default Home;