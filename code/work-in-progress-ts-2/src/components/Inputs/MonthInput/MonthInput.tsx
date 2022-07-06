import React from 'react';
import { MonthOptionType, YearOptionType } from '../../../types';
import Select from '../../UI/Inputs/Select';
import styles from './MonthInput.module.css';

type Props = {};

const buildYearOptions = (year: number): YearOptionType[] => {
  const yearList = new Array(12).fill(year).map((y, index) => y - index + 1);
  const yearOptions = yearList.map((year): YearOptionType => {
    return {
      label: year.toString(),
      value: year,
    };
  });

  return yearOptions;
};

const monthOptions: MonthOptionType[] = [
  {
    value: 'January',
    label: 'January',
  },
  {
    label: 'February',
    value: 'February',
  },
  {
    label: 'March',
    value: 'March',
  },
  {
    label: 'April',
    value: 'April',
  },
  {
    label: 'May',
    value: 'May',
  },
  {
    label: 'June',
    value: 'June',
  },
  {
    label: 'July',
    value: 'June',
  },
  {
    label: 'August',
    value: 'August',
  },
  {
    label: 'September',
    value: 'September',
  },
  {
    label: 'October',
    value: 'October',
  },
  {
    label: 'November',
    value: 'November',
  },
  {
    label: 'December',
    value: 'December',
  },
];

const MonthInput = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Select
        id='month-select'
        options={monthOptions}
        className={styles.month}
        label='Month'
      ></Select>
      <Select
        id='year-select'
        options={buildYearOptions(currentYear)}
        className={styles.year}
        label='Year'
      ></Select>
    </div>
  );
};

export default MonthInput;
