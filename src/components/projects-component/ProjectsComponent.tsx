import React from 'react';

import { StyledProjectsComponentHeader, StyledProjectsComponentIntro, StyledProjectsComponentWrapper } from './StyledProjectsComponent';

const ProjectsComponent: React.FC = () => (
    <StyledProjectsComponentWrapper>
        <StyledProjectsComponentHeader>
            Projects.
        </StyledProjectsComponentHeader>

        <StyledProjectsComponentIntro>
            Here are some projects I did
        </StyledProjectsComponentIntro>

        <p>Sorting</p>

    </StyledProjectsComponentWrapper>
);

ProjectsComponent.displayName = 'ProjectsComponent';

export default ProjectsComponent;