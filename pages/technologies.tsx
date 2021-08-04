import React from 'react';
import Head from 'next/head';

import GlobalWrapper from '../src/components/global-wrapper/GlobalWrapper';

const Technologies: React.FC = () => (
    <>
        <Head>
            <title>YS - Technologies</title>
        </Head>

        <GlobalWrapper>
            <p>Technologies</p>
        </GlobalWrapper>
    </>
);
   
Technologies.displayName = 'Technologies';

export default Technologies;
