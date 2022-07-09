import React from 'react';
import { MonthOption, YearOption, Year } from '../../../types';
import Select from '../../UI/Inputs/Select';
import styles from './MonthInput.module.css';

type Props = {};

const buildYearOptions = (year: number): YearOption[] => {
  const yearList = new Array(12).fill(year).map((y, index) => y - index + 1);
  const yearOptions = yearList.map((year): YearOption => {
    const yearStr: Year = year.toString() as Year;
    return {
      label: yearStr,
      value: yearStr,
    };
  });

  return yearOptions;
};

const monthOptions: MonthOption[] = [
  {
    label: 'January',
    value: 'JAN',
  },
  {
    label: 'February',
    value: 'FEB',
  },
  {
    label: 'March',
    value: 'MAR',
  },
  {
    label: 'April',
    value: 'APR',
  },
  {
    label: 'May',
    value: 'MAY',
  },
  {
    label: 'June',
    value: 'JUN',
  },
  {
    label: 'July',
    value: 'JUL',
  },
  {
    label: 'August',
    value: 'AUG',
  },
  {
    label: 'September',
    value: 'SEP',
  },
  {
    label: 'October',
    value: 'OCT',
  },
  {
    label: 'November',
    value: 'NOV',
  },
  {
    label: 'December',
    value: 'DEC',
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
