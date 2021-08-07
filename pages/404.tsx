import { GetStaticProps } from 'next';

import React from 'react';
import { SelectedPage } from '../src/redux/app/actions';
import { handleGetStaticProps } from '../src/utils/handleGetStaticProps';

const Error: React.FC = () => (
    <div>Error Page</div>
);

export const getStaticProps: GetStaticProps = (context) => handleGetStaticProps(context, SelectedPage.ERROR);

export default Error;