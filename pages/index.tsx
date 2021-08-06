import React from 'react';
import Head from 'next/head';

import Home from '../src/components/home/Home';

const Index: React.FC = () => (
    <>
        <Head>
            <title>YS</title>
        </Head>

        <Home/>
    </>
);
   

export default Index;
