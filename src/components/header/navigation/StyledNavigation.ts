import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`;

export const StyledItems = styled.ul`
    display: flex;
    margin: 0;
    
    @media only screen and (max-width: 450px) {
        display: none;
    }
`;

export const StyledLi = styled('li')<{ isSelected: boolean }>`
    cursor: pointer;
    user-select: none;
    display: block;
    padding: 3px 10px;
    position: relative;
    font-size: 17px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: ${props => props.isSelected ? 'calc(100% - 20px)' : '0px'};
        height: 3px;
        transition: width .3s, background-color .5s linear;
        background-color: var(--text-color);
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
    position: relative;
    height: 25px;
    width: 20px;
`;

export const StyledIcon = styled('div')<{ isActive: boolean }>`
    cursor: pointer;
    padding: 3px;
    margin: -3px;
    margin-top: 2px;
    transition: all .5s;
    transform: ${props => !props.isActive ? 'rotate(-180deg) scale(.5)' : ''};
    opacity: ${props => !props.isActive ? '0' : '1'};
    position: absolute;
    top: 0;
    z-index: ${props => !props.isActive ? '0' : '10'};

    &:hover {
        background-color: var(--hover-color);
        border-radius: 3px;
    }
`;