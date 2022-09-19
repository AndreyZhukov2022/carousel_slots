import React, { FC, memo } from 'react';

import RadioButton from './RadiioButton/RadioButton';
import { RadioButtonGroupProps } from './RadioButtonGroupTypes';

import styles from './RadioButtonsGroup.module.scss';

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({ onChange, data, checkedButton, className }) => (
  <div className={`${styles['radio-button-group']} ${className}`}>
    {data.map(button => (
      <RadioButton
        key={button.id}
        button={button}
        isChecked={checkedButton === button.value}
        onChange={onChange} />
    ))}
  </div>
);

export default memo(RadioButtonGroup);
