import React from 'react';

import { StyledFooter, StyledFooterCopyright, StyledFooterHeader, StyledFooterLeft, StyledFooterLogo, StyledFooterBox, StyledFooterRight, StyledFooterThanks, StyledFooterLink } from './FooterStyles';

const Footer: React.FC = () => (
    <StyledFooter>
        <StyledFooterLeft>
            <StyledFooterLogo>
                Yannick Scho
            </StyledFooterLogo>
            <StyledFooterThanks>
                Thanks for reading!
            </StyledFooterThanks>

            <StyledFooterCopyright>
                © 2020-present Yannick Scho. All Rights Reserved.
            </StyledFooterCopyright>
        </StyledFooterLeft>

        <StyledFooterRight>
            <StyledFooterBox>
                <StyledFooterHeader>
                    Pages
                </StyledFooterHeader>
                <StyledFooterLink>Home</StyledFooterLink>
                <StyledFooterLink>Projects</StyledFooterLink>
                <StyledFooterLink>Skills</StyledFooterLink>
            </StyledFooterBox>

            <StyledFooterBox>
                <StyledFooterHeader>
                    Links
                </StyledFooterHeader>
                <StyledFooterLink>Github</StyledFooterLink>
                <StyledFooterLink>LinkedIn</StyledFooterLink>
            </StyledFooterBox>
        </StyledFooterRight>
    </StyledFooter>
);

export default Footer;