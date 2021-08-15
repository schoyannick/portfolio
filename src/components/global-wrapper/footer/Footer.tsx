import React from 'react';

import { StyledFooter, StyledFooterCopyright } from './FooterStyles';

const Footer: React.FC = () => (
    <StyledFooter>
        <StyledFooterCopyright>
            © 2021-present Yannick Scho. All Rights Reserved.
        </StyledFooterCopyright>
    </StyledFooter>
);

export default Footer;