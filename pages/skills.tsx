import React from 'react';
import Head from 'next/head';

import SkillsComponent from '../src/components/skills-component/SkillsComponent';

const Skills: React.FC = () => (
    <>
        <Head>
            <title>YS - Skills</title>
        </Head>

        <SkillsComponent/>
    </>
);
   
Skills.displayName = 'Skills';

export default Skills;
