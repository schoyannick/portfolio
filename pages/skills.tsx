import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import SkillsComponent from '../src/components/skills-component/SkillsComponent';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';
import { SelectedPage } from '../src/redux/app/actions';

const Skills: React.FC = () => (
    <>
        <Head>
            <title>Yannick Scho - Skills</title>
        </Head>

        <SkillsComponent/>
    </>
);


export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps(context, SelectedPage.SKILLS);
  
Skills.displayName = 'Skills';

export default Skills;
