import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import Link from 'next/link';
import { SelectedPage, setSelectedPage } from '../../redux/app/actions';
import { StyledHeader, StyledHeaderMargin, StyledLogo } from './HeaderStyles';
import Navigation from './navigation/Navigation';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();

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

    return (
        <StyledHeader
            className="header"
        >
            <StyledHeaderMargin>
                <Link
                    href="/"
                    passHref
                >
                    <StyledLogo>
                        Yannick Scho
                    </StyledLogo>
                </Link>

                <Navigation/>
            </StyledHeaderMargin>
        </StyledHeader>
    );
};
   
Header.displayName = 'Header';

export default Header;
