import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';

import { StyledHome, StyledHomeHeader, StyledHomeName, StyledHomeText } from './StyledHomeAbout';

const HomeAbout: React.FC = () => (
    <StyledHome>
        <StyledHomeHeader>
            <StyledHomeText>Hey, I&apos;m </StyledHomeText>
            <br/>
            <StyledHomeText><StyledHomeName>Yannick Scho</StyledHomeName></StyledHomeText>
            <br/>
            <StyledHomeText>web developer.</StyledHomeText>
        </StyledHomeHeader>

        <div>
            <Link
                href="/projects"
                passHref
                shallow
            >
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        marginRight: '15px',
                    }}
                >
                Projects
                </Button>
            </Link>

            <Link
                href="/skills"
                passHref
                shallow
            >
                <Button
                    variant="contained"
                    color="primary"
                >
                Skills
                </Button>
            </Link>
        </div>

    </StyledHome>
);

export default HomeAbout;
