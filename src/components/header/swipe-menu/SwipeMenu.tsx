import React, { useRef , useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

import { StyledSwipeMenu } from './SwipeMenuStyles';

const SwipeMenu: React.FC = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const swipePos = useRef(null);
    const ref = useRef(null);

    return (
        <StyledSwipeMenu
            ref={ref}
        >
            <GiHamburgerMenu
                onClick={() => {
                    setIsMenuShown(!isMenuShown);
                }}
                size={25}
                style={{
                    margin: '0 8px 0 12px',
                }}
            />
        </StyledSwipeMenu>
    );
};


export default SwipeMenu;

