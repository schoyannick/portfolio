import styled from 'styled-components';

export const StyledHomeTerminalWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: #21313c;
    border-radius: 10px;
    color: #adb5b9;

    @media only screen and (max-width: 375px) {
       font-size: 15px;
    }

    @media only screen and (max-width: 360px) {
       font-size: 14px;
    }
`;

export const StyledHomeTerminalHeader = styled.div`
    height: 30px;
    background-color: #44525B;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const StyledHomeTerminalHeaderIconWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

export const StyledHomeTerminalBody = styled.div`
    margin: 10px;
    line-height: 1.5;
`;

export const StyledCodePurple = styled.span`
    color: #d270eb;
`;

export const StyledCodeGreen = styled.span`
   color: #74eb70;
`;

export const StyledCodeGreenATag = styled.a`
   color: #74eb70;
`;

export const StyledCodeBlue = styled.span`
    color: #70a5eb;
`;

export const StyledCodeOrange = styled.span`
    color: #e69941;
`;

export const StyledTab = styled.div`
    margin-left: 32px;
`;

export const StyledHiddenMedia = styled.div`
    @media only screen and (max-width: 360px) {
        display: none;
    }
`;