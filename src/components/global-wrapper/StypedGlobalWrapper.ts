import styled from 'styled-components';

export const StyledGlobalWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

export const StyledGlobalWrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    margin-top: 90px;
    max-width: 1100px;
    width: calc(100% - 40px);
    animation: fadeIn .3s linear;
    min-height: calc(100vh - 250px);

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;