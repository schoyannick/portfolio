import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import Link from 'next/link'; 

import { useSelector } from 'react-redux';
import { StyledHome, StyledHomeHeader, StyledHomeName, StyledHomeText } from './StyledHome';
import { getColorTheme } from '../../redux/app/selectors';
import { ColorTheme } from '../../redux/app/actions';
import { darkTheme, lightTheme } from '../../utils/globalStyles';

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
            <StyledHome>
                <StyledHomeHeader>
                    <StyledHomeText>Hey,</StyledHomeText>
                    <br/>
                    <StyledHomeText>I&apos;m <StyledHomeName>Yannick Scho</StyledHomeName></StyledHomeText>
                    <br/>
                    <StyledHomeText>web developer.</StyledHomeText>
                </StyledHomeHeader>

                <Link
                    href="/projects"
                    passHref
                    shallow
                >
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginRight: '15px',
                        }}
                    >
                        Projects
                    </Button>
                </Link>

                <Link
                    href="/skills"
                    passHref
                    shallow
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Skills
                    </Button>
                </Link>

            </StyledHome>
        </ThemeProvider>
    );
};
export default Home;