import React from 'react';
import GithubIcon from './github-icon/GithubIcon';
import GmailIcon from './gmail-icon/GmailIcon';
import LinkedinIcon from './linkedin-icon/LinkedinIcon';
import { StyledContact, StyledContactHeader, StyledContactItem, StyledContactWrapper } from './StyledContact';

const Contact: React.FC = () => (
    <StyledContact>
        <StyledContactHeader>
            Contact.
        </StyledContactHeader>

        <StyledContactWrapper>
            <GmailIcon/>
            <LinkedinIcon/>
            <GithubIcon/>
        </StyledContactWrapper>
    </StyledContact>
);

Contact.displayName = 'Contact';

export default Contact;