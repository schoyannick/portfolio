import styled from 'styled-components';

export const StyledPageSelectionWrapper = styled('div')`
    padding-top: 3.33333rem;
`;

export const StyledPageSelection = styled('div')<{ isSelected: boolean }>`
    font-size: 25px;
    margin: 20px 10px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        border-bottom: 1px solid;
        border-bottom-color: var(--grey-color);
        bottom: -3px;
    }
`;
