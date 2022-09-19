import React, { FC, memo } from 'react';

import { ButtonProps } from './ButtonTypes';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ onClick, className, children }) => (<button type="button" className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>);

export default memo(Button);
