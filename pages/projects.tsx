import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';
import { SelectedPage } from '../src/redux/app/actions';
import ProjectsComponent from '../src/components/projects-component/ProjectsComponent';

const Projects: React.FC = () => (
    <>
        <Head>
            <title>Yannick Scho - Projects</title>
        </Head>

        <ProjectsComponent/>
    </>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps(context, SelectedPage.PROJECTS);

Projects.displayName = 'Projects';

export default Projects;
