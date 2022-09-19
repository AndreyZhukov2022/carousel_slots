import React, { FC, memo } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => (
  <div className={styles.header}>
    <h1>
      Best Bonuses <span>Lorem Ipsum</span>
    </h1>
    <p className={styles.text}>
      Welcome, all you passionate Australian online casino players out there!
      <span>{` If you a rookie looking for some quick\nguidelines on how to get started or a seasoned player searching for some fresh real money casino recommendations,\nyou've reached the right spot at True Blue!`}</span>
    </p>
  </div>
);

export default memo(Header);
