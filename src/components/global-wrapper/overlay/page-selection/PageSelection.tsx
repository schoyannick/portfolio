import Link from 'next/link';
import { InferProps, string, bool } from 'prop-types';
import React from 'react';
import { StyledPageSelection } from './StyledPageSelection';

const propTypes = {
    href: string,
    isSelected: bool,
    text: string,
};

const PageSelection: React.FC<InferProps<typeof propTypes>> = ({
    isSelected,
    href,
    text,
}) => (
    <Link
        href={href}
        passHref
        shallow
    >
        <StyledPageSelection
            isSelected={isSelected}
        >
            {text}
        </StyledPageSelection>
    </Link>
);

PageSelection.propTypes = propTypes;

PageSelection.displayName = 'PageSelection';

export default PageSelection;