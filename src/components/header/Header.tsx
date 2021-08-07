import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useRouter } from 'next/dist/client/router';

import { getColorTheme, getSelectedPage } from '../../redux/app/selectors';
import { ColorTheme, SelectedPage, setColorTheme, setSelectedPage } from '../../redux/app/actions';
import { StyledHeader, StyledHeaderMargin, StyledIcon, StyledIconWrapper, StyledItems, StyledLi, StyledLogo, StyledNav } from './HeaderStyles';
import SwipeMenu from './swipe-menu/SwipeMenu';

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
        case '/skills':
            dispatch(setSelectedPage(SelectedPage.SKILLS));
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
                    Yannick Scho
                </StyledLogo>

                <StyledNav>
                    <StyledIconWrapper>
                        <StyledIcon
                            onClick={handleColorThemeChange}
                            isActive={colorTheme === ColorTheme.DARK}
                        >
                            <BsMoon/>
                        </StyledIcon>

                        <StyledIcon
                            onClick={handleColorThemeChange}
                            isActive={colorTheme === ColorTheme.LIGHT}
                        >
                            <BsSun/>
                        </StyledIcon>
                    </StyledIconWrapper>
                
                    <StyledItems>
                        <Link
                            href="/"
                            passHref
                            shallow
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
                            shallow
                        >
                            <StyledLi
                                className="styled-li"
                                isSelected={selectedPage === SelectedPage.PROJECTS}
                            >
                        Projects
                            </StyledLi>
                        </Link>

                        <Link
                            href="/skills"
                            passHref
                            shallow
                        >
                            <StyledLi
                                className="styled-li"
                                isSelected={selectedPage === SelectedPage.SKILLS}
                            >
                                Skills
                            </StyledLi>
                        </Link>
                    </StyledItems>
                    
                    <SwipeMenu/>
                </StyledNav>
            
                
            </StyledHeaderMargin>
        </StyledHeader>
    );
};
   
Header.displayName = 'Header';

export default Header;
