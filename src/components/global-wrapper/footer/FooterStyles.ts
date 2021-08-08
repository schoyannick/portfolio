import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 32px auto;
`;

export const StyledFooterLeft = styled.div`

`;

export const StyledFooterLogo = styled.div`
    color: var(--primary-color);
    font-size: 21px;
    font-weight: bold;
    letter-spacing: -1px;
`;

export const StyledFooterThanks = styled.p`
    font-weight: 600;
    font-size: 13px;
    margin-top: 6px;
`;

export const StyledFooterCopyright = styled.span`
    font-size: 12px;
    margin-top: 25px;
    display: block;
    color: var(--grey-color);
`;

export const StyledFooterRight = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledFooterHeader = styled.div`
    font-weight: bold;
    margin-bottom: 3px;
    cursor: default;
`;

export const StyledFooterBox = styled.div`
    &:not(:last-child) {
        margin-right: 4em;
    }
`;

export const StyledFooterLink = styled.div`
    cursor: pointer;
    margin: 5px 0;
`;