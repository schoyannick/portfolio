import React from 'react';

const ReactIcon: React.FC = () => (
    <svg
        className="skill-icon" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16 16" 
        width="80px" 
        height="80px"
    >
        <circle 
            cx="8"
            cy="8"
            r="1"
        />
        <ellipse 
            cx="8" 
            cy="8"
            fill="none"
            stroke="currentColor" 
            strokeMiterlimit="10"
            rx="6.5"
            ry="2.5"
        />
        <ellipse 
            cx="8" 
            cy="8" 
            fill="none" 
            stroke="currentColor" 
            strokeMiterlimit="10"
            rx="2.5" 
            ry="6.25"
            transform="rotate(-30 8 8)"
        />
        <ellipse
            cx="8" 
            cy="8" 
            fill="none" 
            stroke="currentColor" 
            strokeMiterlimit="10"
            rx="6.25"
            ry="2.5" 
            transform="rotate(-60 8 8)"
        />
    </svg>
);

ReactIcon.displayName = 'ReactIcon';

export default ReactIcon;
