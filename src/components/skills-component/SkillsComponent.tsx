import React from 'react';

import { StyledSkillsComponentHeader, StyledSkillsComponentIntro, StyledSkillsComponentWrapper, StyledSkillsIconWrapper, StyledSkillsWrapper } from './StyledSkillsComponent';
import SkillIcon from './skill-icon/SkillIcon';
import { SKILLS_DATA, SkillTypes } from '../../constants/skillsData';

const SkillsComponent: React.FC = () => (
    <StyledSkillsComponentWrapper>
        <StyledSkillsComponentHeader>
            Skills.
        </StyledSkillsComponentHeader>

        <StyledSkillsComponentIntro>
            Web developer with experience in the following technologies
        </StyledSkillsComponentIntro>

        <StyledSkillsWrapper>
            {SKILLS_DATA.map((skill: { title: string, type: SkillTypes }) => (
                <StyledSkillsIconWrapper
                    key={skill.type}
                >
                    <SkillIcon
                        type={skill.type}
                    />
                    <p>{skill.title}</p>
                </StyledSkillsIconWrapper>
            ))}
        </StyledSkillsWrapper>
          
    </StyledSkillsComponentWrapper>
);

export default SkillsComponent;