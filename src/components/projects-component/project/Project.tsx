import PropTypes, { InferProps } from 'prop-types';
import React from 'react';
import { StyledProject, StyledProjectGif } from './StyledProject';

const propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

const Project: React.FC<InferProps<typeof propTypes>> = ({
    title,
    url,
    description,
    github,
}) => {
    console.log('');
    
    return (
        <StyledProject>
            <StyledProjectGif>
                GIF
            </StyledProjectGif>
            
        </StyledProject>
    );
};

Project.propTypes = propTypes;

Project.displayName = 'Project';

export default Project;