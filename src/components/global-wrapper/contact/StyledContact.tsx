import styled from 'styled-components';

export const StyledContact = styled.div`
    max-width: 1100px;
    width: calc(100% - 40px);
    margin: 75px auto 50px;
`;

export const StyledContactHeader = styled.h1`
    margin-bottom: 15px;
`;

export const StyledContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;

    @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const StyledContactItem = styled.div`
    display: flex;
`;