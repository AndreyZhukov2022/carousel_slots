import React, { forwardRef, LegacyRef, memo } from 'react';

import { NavigationButtonProps } from './NavigationButtonTypes';

import styles from './NavigationButton.module.scss';

const NavigationButton = forwardRef(({direction, className}: NavigationButtonProps, ref: LegacyRef<HTMLImageElement>) => (
    <img src="../../../static/arrow.svg" ref={ref} className={`${styles[`${direction}`]} ${className}`} alt={`navigation-${direction}`} />)
);

export default memo(NavigationButton);
