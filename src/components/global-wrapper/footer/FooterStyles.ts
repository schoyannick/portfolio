import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 32px auto;
`;

export const StyledFooterCopyright = styled.span`
    font-size: 12px;
    margin-top: 25px;
    display: block;
    color: var(--grey-color);
`;
