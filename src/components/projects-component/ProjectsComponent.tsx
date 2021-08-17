import React from 'react';
import { PROJECT_DATA } from '../../constants/projectData';
import Project from './project/Project';

import { StyledProjectsComponentHeader, StyledProjectsComponentIntro, StyledProjectsComponentWrapper, StyledProjectsWrapper } from './StyledProjectsComponent';

const ProjectsComponent: React.FC = () => (
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
);

ProjectsComponent.displayName = 'ProjectsComponent';

export default ProjectsComponent;