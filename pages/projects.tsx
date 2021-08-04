import React from 'react';
import Head from 'next/head';

import GlobalWrapper from '../src/components/global-wrapper/GlobalWrapper';

const Projects: React.FC = () => (
    <>
        <Head>
            <title>YS - Projects</title>
        </Head>

        <GlobalWrapper>
            <p>Projects</p>
        </GlobalWrapper>
    </>
);
   
Projects.displayName = 'Projects';

export default Projects;
