import styled from 'styled-components';

export const StyledHome = styled.div`
    width: 100%;

    @media only screen and (max-width: 680px) {
        width: unset;
        margin-top: 20px;
    }
`;

export const StyledHomeHeader = styled.div`
    margin-bottom: 30px;
    font-weight: 500;
`;

export const StyledHomeText = styled.span`
    font-size: 50px;

    @media only screen and (max-width: 680px) {
        font-size: 35px;
    }
`;

export const StyledHomeName = styled.span`
    font-size: 60px;
    font-weight: bold;

    
    @media only screen and (max-width: 680px) {
        font-size: 45px;
    }
`;
