import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/dist/client/router';
import { getSelectedPage } from '../../redux/app/selectors';
import { SelectedPage, setSelectedPage } from '../../redux/app/actions';

const StyledHeader = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    align-items: center;
`;
const StyledNav = styled.nav`
    display: flex;
`;
const StyledLi = styled('li')<{ isSelected: boolean }>`
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
        background-color: var(--text-color);
        transition: all .3s;
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

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const selectedPage = useSelector(getSelectedPage);

    useEffect(() => {
        switch (router.pathname) {
        case '/contact':
            dispatch(setSelectedPage(SelectedPage.CONTACT));
            break;
        case '/about':
            dispatch(setSelectedPage(SelectedPage.ABOUT));
            break;
        default:
            dispatch(setSelectedPage(SelectedPage.HOME));
            break;
        }
    }, [dispatch, router.pathname]);
    
    return (
        <StyledHeader>
            <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
            />

            <StyledNav>
                <Link
                    href="/"
                    passHref
                >
                    <StyledLi
                        isSelected={selectedPage === SelectedPage.HOME}
                    >Home</StyledLi>
                </Link>
               
                <Link
                    href="/about"
                    passHref
                >
                    <StyledLi
                        isSelected={selectedPage === SelectedPage.ABOUT}
                    >
                        About
                    </StyledLi>
                </Link>

                <Link
                    href="/contact"
                    passHref
                >
                    <StyledLi
                        isSelected={selectedPage === SelectedPage.CONTACT}
                    >
                        Contact
                    </StyledLi>
                </Link>
            </StyledNav>
        </StyledHeader>
    );
};
   

export default Header;
