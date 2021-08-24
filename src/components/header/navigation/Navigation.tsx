import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useRouter } from 'next/dist/client/router';

import { getColorTheme, getSelectedPage } from '../../../redux/app/selectors';
import { ColorTheme, SelectedPage, setColorTheme, setSelectedPage } from '../../../redux/app/actions';
import { StyledIcon, StyledIconWrapper, StyledItems, StyledLi, StyledNav } from './StyledNavigation';
import BurgerBadge from '../burger-badge/BurgerBadge';

const Navigation: React.FC = () => {
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
        <StyledNav>
            <StyledIconWrapper>
                <StyledIcon
                    onClick={handleColorThemeChange}
                    isActive={colorTheme === ColorTheme.DARK}
                >
                    <BsMoon
                        size={20}
                    />
                </StyledIcon>

                <StyledIcon
                    onClick={handleColorThemeChange}
                    isActive={colorTheme === ColorTheme.LIGHT}
                >
                    <BsSun
                        size={20}
                    />
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

            <BurgerBadge/>
        </StyledNav>
    );
};
   
Navigation.displayName = 'Navigation';

export default Navigation;
