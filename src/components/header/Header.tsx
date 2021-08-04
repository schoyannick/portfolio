import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useRouter } from 'next/dist/client/router';

import styled from 'styled-components';
import { getColorTheme, getSelectedPage } from '../../redux/app/selectors';
import { ColorTheme, SelectedPage, setColorTheme, setSelectedPage } from '../../redux/app/actions';
import { StyledHeader, StyledHeaderMargin, StyledIcon, StyledIconWrapper, StyledLi, StyledLogo, StyledNav } from './HeaderStyles';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const selectedPage = useSelector(getSelectedPage);
    const colorTheme = useSelector(getColorTheme);

    useEffect(() => {
        switch (router.pathname) {
        case '/projects':
            dispatch(setSelectedPage(SelectedPage.PROJECTS));
            break;
        case '/technologies':
            dispatch(setSelectedPage(SelectedPage.TECHNOLOGIES));
            break;
        default:
            dispatch(setSelectedPage(SelectedPage.HOME));
            break;
        }
    }, [dispatch, router.pathname]);

    const handleColorThemeChange = () => {
        dispatch(setColorTheme(colorTheme === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK));
    };
    
    return (
        <StyledHeader
            className="header"
        >
            <StyledHeaderMargin>
                <StyledLogo>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="logo"
                    />
                </StyledLogo>

                <StyledNav>
                    <StyledIconWrapper>
                        {colorTheme === ColorTheme.DARK && (
                            <StyledIcon
                                onClick={handleColorThemeChange}
                            >
                                <BsMoon/>
                            </StyledIcon>
                        )}

                        {colorTheme === ColorTheme.LIGHT && (
                            <StyledIcon
                                onClick={handleColorThemeChange}
                            >
                                <BsSun/>
                            </StyledIcon>
                        )}
                    </StyledIconWrapper>
                
                    <Link
                        href="/"
                        passHref
                    >
                        <StyledLi
                            className="styled-li"
                            isSelected={selectedPage === SelectedPage.HOME}
                        >
                        Home
                        </StyledLi>
                    </Link>
               
                    <Link
                        href="/projects"
                        passHref
                    >
                        <StyledLi
                            isSelected={selectedPage === SelectedPage.PROJECTS}
                        >
                        Projects
                        </StyledLi>
                    </Link>

                    <Link
                        href="/technologies"
                        passHref
                    >
                        <StyledLi
                            isSelected={selectedPage === SelectedPage.TECHNOLOGIES}
                        >
                        Technologies
                        </StyledLi>
                    </Link>
                </StyledNav>
            
                
            </StyledHeaderMargin>
        </StyledHeader>
    );
};
   
Header.displayName = 'Header';

export default Header;
