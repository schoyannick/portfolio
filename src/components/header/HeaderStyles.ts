import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`;

export const StyledHeaderMargin = styled.div`
    width: calc(100% - 40px);
    max-width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const StyledLogo = styled.div`
    color: var(--primary-color);
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
    cursor: pointer;
`;
