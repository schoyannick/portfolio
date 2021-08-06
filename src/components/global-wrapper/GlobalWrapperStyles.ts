import styled from 'styled-components';

export const StyledGlobalWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledGlobalWrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    margin-left: 1px;
    margin-top: 120px;
    min-height: calc(100vh - 120px);
`;