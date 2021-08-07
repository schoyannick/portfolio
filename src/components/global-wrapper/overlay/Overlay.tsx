import React, { useState , useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setIsOverlayShown } from '../../../redux/app/actions';

import { getIsOverlayShown } from '../../../redux/app/selectors';
import { StyledMenu, StyledOverlay, StyledOverlayWrapper } from './StyledOverlay';

const Overlay: React.FC = () => {
    const dispatch = useDispatch();
    const isOverlayShown = useSelector(getIsOverlayShown);

    return (
        <>
            <StyledOverlay
                isActive={isOverlayShown}
                onClick={() => {
                    dispatch(setIsOverlayShown(!isOverlayShown));
                }}
            />
            
            <StyledMenu/>
        </>
    );
};

Overlay.displayName = 'Overlay';

export default Overlay;