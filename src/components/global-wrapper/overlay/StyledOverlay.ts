import styled, { css } from 'styled-components';

export const StyledOverlayWrapper = styled.div`

`;

export const StyledOverlay = styled('div')<{ isActive: boolean }>`
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    background: rgba(0,0,0, .3);
    transition: all .3s;

    ${props => props.isActive && (
        css`
            opacity: 1;
            pointer-events: all;
        `
    )}
`;

export const StyledMenu = styled('div')`
    position: absolute;
    background-color: red;
    z-index: 10;
    width: 75%;
    height: 100%;
    transition: all .3s;
    transform: translateX(100%);
    right: 0;
    top: 0;
`;