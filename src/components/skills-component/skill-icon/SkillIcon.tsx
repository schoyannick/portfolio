import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { SkillTypes } from '../skillsData';
import ReactIcon from './react-icon/ReactIcon';
import JavaScriptIcon from './javascript-icon/JavaScriptIcon';

const propTypes = {
    type: PropTypes.number.isRequired,
};

const SkillIcon: React.FC<InferProps<typeof propTypes>> = ({
    type,
}) => {
    if (type === SkillTypes.REACT) {
        return (
            <ReactIcon/>
        );
    }

    if (type === SkillTypes.JAVASCRIPT) {
        return (
            <JavaScriptIcon/>
        );
    }

    return null;
};

export default SkillIcon;