import React, { FC, useState } from "react";

import Header from "./Header/Header";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import RadioButtonGroup from "../RadioButtonsGroup/RadioButtonsGroup";

import styles from "./BestBonuses.module.scss";

const RADIO_BUTTONS_DATA = [
  {
    value: "noDeposit",
    label: "No Deposit Bonus",
    id: "1"
  },
  {
    value: "welcome",
    label: "Welcome Bonus",
    id: "2"
  },
  {
    value: "freeSpin",
    label: "Free Spin Bonus",
    id: "3"
  },
];

const BestBonuses: FC = () => {
  const [checkedButton, setCheckedButton] = useState(RADIO_BUTTONS_DATA[0].value);

  return (
    <div className={styles["best-bonuses-container"]}>
      <Header />
      <RadioButtonGroup
        data={RADIO_BUTTONS_DATA}
        onChange={setCheckedButton}
        checkedButton={checkedButton}
        className={styles["radio-buttons"]}
      />
      <Carousel />
      <Button className={styles["simple-button"]}>
        <span>Show </span>All No Deposit Bonuses
      </Button>
    </div>
  );
};

export default BestBonuses;
