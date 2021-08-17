import styled from 'styled-components';

export const StyledGmailIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledGmailText = styled.div`
    cursor: pointer;
    font-size: 14px;
    position: relative;

    &:hover {
        span {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const StyledToolTip = styled.span`
    visibility: hidden;
    width: 50%;
    background-color: var(--text-color);
    color: var(--text-color-reverse);
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: -35px;
    left: 25%;
    opacity: 0;
    transition: opacity 0.3s;

    &:after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent var(--text-color) transparent;
    }
`;