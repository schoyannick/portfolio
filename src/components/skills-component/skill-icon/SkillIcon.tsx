import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { SkillTypes } from '../skillsData';
import ReactIcon from './react-icon/ReactIcon';
import JavaScriptIcon from './javascript-icon/JavaScriptIcon';
import CssIcon from './css-icon/CssIcon';
import HtmlIcon from './html-icon/HtmlIcon';
import SassIcon from './sass-icon/SassIcon';
import ReduxIcon from './redux-icon/ReduxIcon';
import NextIcon from './next-js-icon/NextIcon';
import NodeJsIcon from './node-js-icon/NodeJsIcon';
import ResponseDesignIcon from './responsive-design-icon/ResponseDesignIcon';
import GitIcon from './git-icon/GitIcon';

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

    if (type === SkillTypes.CSS) {
        return (
            <CssIcon/>
        );
    }

    if (type === SkillTypes.HTML) {
        return (
            <HtmlIcon/>
        );
    }

    if (type === SkillTypes.SASS) {
        return (
            <SassIcon/>
        );
    }

    if (type === SkillTypes.REDUX) {
        return (
            <ReduxIcon/>
        );
    }

    if (type === SkillTypes.NEXT_JS) {
        return (
            <NextIcon/>
        );
    }

    if (type === SkillTypes.NODE_JS) {
        return (
            <NodeJsIcon/>
        );
    }

    if (type === SkillTypes.RESPONSIVE_DESIGN) {
        return (
            <ResponseDesignIcon/>
        );
    }

    if (type === SkillTypes.GIT) {
        return (
            <GitIcon/>
        );
    }

    return <div style={{
        height: 80,
        width: 80,
    }} />;
};

export default SkillIcon;