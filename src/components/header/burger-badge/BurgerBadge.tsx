import React, { useRef , useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOverlayShown } from '../../../redux/app/actions';
import { getIsOverlayShown } from '../../../redux/app/selectors';

import { StyledBurgerBadge } from './StyledBurgerBadge';

const BurgerBadge: React.FC = () => {
    const dispatch = useDispatch();
    const isOverlayShown = useSelector(getIsOverlayShown);

    return (
        <StyledBurgerBadge>
            <GiHamburgerMenu
                onClick={() => {
                    dispatch(setIsOverlayShown(!isOverlayShown));
                }}
                size={25}
                style={{
                    marginLeft: '8px',
                }}
            />
        </StyledBurgerBadge>
    );
};


export default BurgerBadge;

