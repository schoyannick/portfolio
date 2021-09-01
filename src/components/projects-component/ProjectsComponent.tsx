import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { PROJECT_DATA } from '../../constants/projectData';
import { ColorTheme } from '../../redux/app/actions';
import { getColorTheme } from '../../redux/app/selectors';
import { darkTheme, lightTheme } from '../../utils/globalStyles';
import Project from './project/Project';

import { StyledProjectsComponentHeader, StyledProjectsComponentIntro, StyledProjectsComponentWrapper, StyledProjectsWrapper } from './StyledProjectsComponent';

const ProjectsComponent: React.FC = () => {
    
    const colorTheme = useSelector(getColorTheme);
    
    const theme = createTheme({
        palette: {
            primary: {
                main: colorTheme === ColorTheme.LIGHT ? lightTheme.primary : darkTheme.primary,
            },
        },
    });
    
    return (
        <ThemeProvider 
            theme={theme}
        >
            <StyledProjectsComponentWrapper>
                <StyledProjectsComponentHeader>
                    Projects.
                </StyledProjectsComponentHeader>

                <StyledProjectsComponentIntro>
                    Below are some projects I made
                </StyledProjectsComponentIntro>

                <StyledProjectsWrapper>
                    {PROJECT_DATA.map((project) => (
                        <Project
                            key={project.title}
                            {...project}
                        />
                    ))}
                </StyledProjectsWrapper>

            </StyledProjectsComponentWrapper>
        </ThemeProvider>
    );
};

ProjectsComponent.displayName = 'ProjectsComponent';

export default ProjectsComponent;