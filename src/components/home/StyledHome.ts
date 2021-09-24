import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`
    display: flex;
    width: 100%;

    @media only screen and (max-width: 680px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        margin-bottom: 50px;
    }
`;
