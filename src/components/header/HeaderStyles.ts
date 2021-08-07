import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    height: 70px;
    position: fixed;
    top: 0;
    max-width: 1100px;
    width: calc(100% - 40px);
`;

export const StyledHeaderMargin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogo = styled.div`
    color: var(---primary-color);
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
`;
