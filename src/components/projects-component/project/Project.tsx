import { Button } from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import React from 'react';

import { StyledContent, StyledImage, StyledProject, StyledProjectAnchor, StyledProjectButtonWrapper, StyledProjectDescription, StyledProjectName, StyledProjectTechnology, StyledProjectTechnologyWrapper } from './StyledProject';

const propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Project: React.FC<InferProps<typeof propTypes>> = ({
    title,
    url,
    description,
    github,
    image,
    technologies,
}) => (
    <StyledProject>
        <StyledImage
            src={image}
            alt="sorting-visualization"
        />
        <StyledContent>
            <StyledProjectName>{title}</StyledProjectName>
            <StyledProjectDescription>{description}</StyledProjectDescription>

            <StyledProjectTechnologyWrapper>
                {technologies.map((technology) => (
                    <StyledProjectTechnology
                        key={technology}
                    >
                        {technology}
                    </StyledProjectTechnology>
                ))}
            </StyledProjectTechnologyWrapper>
                
            <StyledProjectButtonWrapper>
                <StyledProjectAnchor
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginRight: '15px',
                        }}
                    >
                        Website
                    </Button>
                </StyledProjectAnchor>

                <StyledProjectAnchor
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Github
                    </Button>
                </StyledProjectAnchor>
            </StyledProjectButtonWrapper>
        </StyledContent>
    </StyledProject>
);

Project.propTypes = propTypes;

Project.displayName = 'Project';

export default Project;