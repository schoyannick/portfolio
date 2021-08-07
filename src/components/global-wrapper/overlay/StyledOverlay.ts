import styled, { css } from 'styled-components';

export const StyledOverlayWrapper = styled.div`

`;

export const StyledOverlay = styled('div')<{ isActive: boolean }>`
    position: fixed;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
    background: rgba(0,0,0, .3);
    transition: opacity .3s;

    ${props => props.isActive && (
        css`
            opacity: 1;
            pointer-events: all;
        `
    )}
`;

export const StyledMenu = styled('div')<{ disableAnimation : boolean }>`
    position: fixed;
    background-color: var(--background-color);
    z-index: 20;
    width: 75%;
    height: 100%;
    transition: ${props => props.disableAnimation ? 'none' : '.3s all'};
    transform: translateX(100%);
    right: 0;
    top: 0;
`;