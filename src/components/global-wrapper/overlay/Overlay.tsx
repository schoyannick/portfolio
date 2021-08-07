import React, { useRef , useState , useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../../../constants/pages';

import { setIsOverlayShown } from '../../../redux/app/actions';
import { getIsOverlayShown, getMetrics, getSelectedPage } from '../../../redux/app/selectors';
import PageSelection from './page-selection/PageSelection';
import { StyledPageSelectionWrapper } from './page-selection/StyledPageSelection';
import { StyledMenu, StyledOverlay } from './StyledOverlay';

const Overlay: React.FC = () => {
    const dispatch = useDispatch();
    const isOverlayShown = useSelector(getIsOverlayShown);
    const selectedPage = useSelector(getSelectedPage);
    const { width } = useSelector(getMetrics);

    const [disableAnimation, setDisableAnimation] = useState(false);
    const menuRef = useRef(null);
    const transform = useRef(null);
    const touchStart = useRef({
        ts: null,
        x: null,
    });

    useEffect(() => {
        if (isOverlayShown) {
            menuRef.current.style.transform = 'translateX(0%)';
        } else {
            menuRef.current.style.transform = 'translateX(100%)';
        }
    }, [isOverlayShown]);

    useEffect(() => {
        if (isOverlayShown && width > 450) {
            dispatch(setIsOverlayShown(false));
        }
    }, [dispatch, isOverlayShown, width]);

    const handleTouchStart = (e: React.TouchEvent) => {
        transform.current = null;
        touchStart.current.ts = Date.now();
        touchStart.current.x = e.touches[0].clientX;
        setDisableAnimation(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const dif = e.touches[0].clientX - touchStart.current.x;
        const max = width * 0.75;
        const newPos = Math.max(0, Math.min(max, dif));
        transform.current = newPos;
        menuRef.current.style.transform = `translateX(${newPos}px)`;
    };

    const handleTouchEnd = () => {
        setDisableAnimation(false);
        const velocity = Math.abs((transform.current - touchStart.current.x) / (Date.now() - touchStart.current.ts) * 600);
        
        if (transform.current > width * 0.75 / 2.5 || velocity > 200) {
            dispatch(setIsOverlayShown(false));
        } else {
            menuRef.current.style.transform = 'translateX(0%)';
        }
        transform.current = null;
        touchStart.current.ts = null;
        touchStart.current.x = null;
    };

    return (
        <>
            <StyledOverlay
                isActive={isOverlayShown}
                onClick={() => {
                    dispatch(setIsOverlayShown(!isOverlayShown));
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
            />
            
            <StyledMenu
                ref={menuRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                disableAnimation={disableAnimation}
            >
                <StyledPageSelectionWrapper>
                    {PAGES.map((page) => (
                        <PageSelection
                            key={page.href}
                            isSelected={page.type === selectedPage}
                            href={page.href}
                            text={page.title}
                        />
                    ))}
                </StyledPageSelectionWrapper>
            </StyledMenu>
        </>
    );
};

Overlay.displayName = 'Overlay';

export default Overlay;