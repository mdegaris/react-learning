import React, { useMemo } from 'react';
import Select from '../../UI/Inputs/Select/Select';
import styles from './MonthInput.module.css';
import { buildYearOptions, monthOptions } from './selectData';

type Props = {};

const MonthInput = (props: Props) => {
  const currentYear = new Date().getFullYear();
  const months = useMemo(() => monthOptions, []);
  const years = useMemo(() => buildYearOptions(currentYear), [currentYear]);

  return (
    <div className={styles.container}>
      <Select
        id='month-select'
        label='Month'
        options={months}
        placeholder='Month'
        className={styles.month}
      ></Select>
      <Select
        id='year-select'
        label='Year'
        options={years}
        placeholder='Year'
        className={styles.year}
      ></Select>
    </div>
  );
};

export default MonthInput;
