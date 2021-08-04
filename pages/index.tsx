import React from 'react';
import Head from 'next/head';

import Home from '../src/components/home/Home';
import GlobalWrapper from '../src/components/global-wrapper/GlobalWrapper';

const Index: React.FC = () => (
    <>
        <Head>
            <title>YS</title>
        </Head>

        <GlobalWrapper>
            <Home/>
        </GlobalWrapper>
    </>
);
   

export default Index;
