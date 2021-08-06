import React from 'react';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { SKILLS_DATA, SkillTypes } from './skillsData';
import { StyledSkillsComponentHeader, StyledSkillsComponentIntro, StyledSkillsComponentWrapper, StyledSkillsWrapper } from './StyledSkillsComponent';
import { getColorTheme } from '../../redux/app/selectors';
import { ColorTheme } from '../../redux/app/actions';
import SkillIcon from './skill-icon/SkillIcon';

const SkillsComponent: React.FC = () => {
    const colorTheme = useSelector(getColorTheme);
    const imagePostfix = colorTheme === ColorTheme.DARK ? '-dark' : '';

    return (
        <StyledSkillsComponentWrapper>
            <StyledSkillsComponentHeader>
                Skills.
            </StyledSkillsComponentHeader>

            <StyledSkillsComponentIntro>
                Frontend developer with experience in the following technologies
            </StyledSkillsComponentIntro>

            <StyledSkillsWrapper>
                {SKILLS_DATA.map((skill: { title: string, type: SkillTypes }) => (
                    <div
                        key={skill.type}
                    >
                        <p>{skill.title}</p>
                        <SkillIcon
                            type={skill.type}
                        />
                    </div>
                ))}
            </StyledSkillsWrapper>
          
        </StyledSkillsComponentWrapper>
    );
};

export default SkillsComponent;