import React, { FC, memo } from 'react';

import { CardProps } from './CardTypes';
import Button from '../../Button/Button';

import styles from './Card.module.scss';

const Card: FC<CardProps> = ({ casino, logo, amount, exclusive, background }) => (
  <div className={styles.container}>
    <div className={styles[`header-${background}`]}>
      <img src={logo} className={styles.logo} alt={`${casino}-logo`} />
      <p className={styles.casino}>{`${casino} -Review`}</p>
    </div>
    <div className={styles.body}>
      <div className={styles.title}>NO DEPOSIT BONUS</div>
      <div className={styles.benefits}>
        <span className={styles.percentage}>400% up to</span>
        <p className={styles.amount}>{amount}</p>
        <p className={styles['free-spin']}>+ 100 Free Spins</p>
        <p className={styles.cleopatra}>on Cleopatra’s Gold</p>
      </div>
      <div className={styles['button-container']}>
        <Button className={styles['yellow-button']}>PLAY</Button>
        <img src="../../../static/flag.svg" className={styles['flag-icon']} alt="flag-icon" />
      </div>
        {exclusive && <div className={styles.label}>EXCLUSIVE</div>}
    </div>
    <img src="../../../static/info-icon.svg" className={styles['info-icon']} alt="info-icon" />
  </div>
);

export default memo(Card);
