import React, { FC, memo } from 'react';

import styles from './RadioButton.module.scss';
import { RadioButtonProps } from './RadioButtonTypes';

const RadioButton: FC<RadioButtonProps> = ({ button, isChecked, onChange }) => {
  const { label, value: buttonValue } = button;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={styles[`container${isChecked ? '-checked' : ''}`]}>
      <input
        type="radio"
        checked={isChecked}
        id={buttonValue}
        value={buttonValue}
        onChange={handleRadioChange}
        className={styles.input}
      />
      <label htmlFor={buttonValue} className={styles.label} >{label}</label>
    </div>
  );
};

export default memo(RadioButton);
