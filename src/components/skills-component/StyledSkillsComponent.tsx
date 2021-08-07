import styled from 'styled-components';

export const StyledSkillsComponentWrapper = styled.div`
    width: 100%;
`;

export const StyledSkillsComponentHeader = styled.h1`
    margin-bottom: 8px;
`;

export const StyledSkillsComponentIntro = styled.p`
    color: var(--text-color);
`;

export const StyledSkillsWrapper = styled.div`
    margin-top: 3em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 200px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledSkillsIconWrapper = styled.div`
    text-align: center;
`;