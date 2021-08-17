import styled from 'styled-components';

export const StyledProjectsComponentWrapper = styled.div`
    width: 100%;
`;

export const StyledProjectsComponentHeader = styled.h1`
    margin-bottom: 8px;
`;

export const StyledProjectsComponentIntro = styled.p`
    color: var(--text-color);
`;

export const StyledProjectsWrapper = styled.div`
    margin-top: 3em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;

    @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`;