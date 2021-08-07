import React from 'react';

import { SKILLS_DATA, SkillTypes } from './skillsData';
import { StyledSkillsComponentHeader, StyledSkillsComponentIntro, StyledSkillsComponentWrapper, StyledSkillsIconWrapper, StyledSkillsWrapper } from './StyledSkillsComponent';
import SkillIcon from './skill-icon/SkillIcon';

const SkillsComponent: React.FC = () => (
    <StyledSkillsComponentWrapper>
        <StyledSkillsComponentHeader>
                Skills.
        </StyledSkillsComponentHeader>

        <StyledSkillsComponentIntro>
                Frontend developer with experience in the following technologies
        </StyledSkillsComponentIntro>

        <StyledSkillsWrapper>
            {SKILLS_DATA.map((skill: { title: string, type: SkillTypes }) => (
                <StyledSkillsIconWrapper
                    key={skill.type}
                >
                    <p>{skill.title}</p>
                    <SkillIcon
                        type={skill.type}
                    />
                </StyledSkillsIconWrapper>
            ))}
        </StyledSkillsWrapper>
          
    </StyledSkillsComponentWrapper>
);

export default SkillsComponent;