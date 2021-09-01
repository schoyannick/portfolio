import styled from 'styled-components';

export const StyledProject = styled.div`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 790px) {
        display: block;
        text-align: center;
    }
`;

export const StyledImage = styled.img`
   width: 300px;
   height: 275px;
`;

export const StyledContent = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 790px) {
        margin-left: 0;
        margin-top: 0.5rem;
    }
`;

export const StyledProjectName = styled.h2`
    margin-top: 0;
`;

export const StyledProjectDescription = styled.div`
    flex-grow: 1;
    margin-bottom: 1rem;
`;

export const StyledProjectTechnologyWrapper = styled.div`
    display: flex;
    margin: 1rem 0;

    @media only screen and (max-width: 790px) {
        justify-content: center;
    }
`;

export const StyledProjectTechnology = styled.div`
    opacity: .7;
    margin-right: 1rem;
`;

export const StyledProjectButtonWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: center;
`;

export const StyledProjectAnchor = styled.a`
    text-decoration: none;
`;