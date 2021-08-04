import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

export const StyledHeaderMargin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogo = styled.div`
    margin-left: 8px;
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`;

export const StyledLi = styled('li')<{ isSelected: boolean }>`
    cursor: pointer;
    user-select: none;
    display: block;
    padding: 3px 10px;
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: ${props => props.isSelected ? 'calc(100% - 20px)' : 0};
        height: 3px;
    }

    &:last-of-type {
        margin-right: 8px;
    }

    ${props => !props.isSelected && (
        css`&:hover {
            background-color: var(--hover-color);
            border-radius: 3px;
        }`
    )}
}`;

export const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 3vw;
`;

export const StyledIcon = styled.div`
    cursor: pointer;
    padding: 3px;
    margin: -3px;
`;