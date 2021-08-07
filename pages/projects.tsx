import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';
import { SelectedPage } from '../src/redux/app/actions';

const Projects: React.FC = () => (
    <>
        <Head>
            <title>YS - Projects</title>
        </Head>

        <p>Projects</p>
    </>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps(context, SelectedPage.PROJECTS);

Projects.displayName = 'Projects';

export default Projects;
