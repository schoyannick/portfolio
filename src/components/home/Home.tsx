import React from 'react';
import { Button } from '@material-ui/core';

import { StyledHome, StyledHomeHeader, StyledHomeHeaderDeveloper } from './StyledHome';
import Hero from './hero/Hero';

const Home: React.FC = () => (
    <StyledHome>
        <StyledHomeHeader>
            <p>Welcome, I am a</p>
            <StyledHomeHeaderDeveloper>web developer</StyledHomeHeaderDeveloper>
            .
        </StyledHomeHeader>
        <Hero/>
        <Button variant="contained">Default</Button>
        link to skills
    </StyledHome>
);

export default Home;