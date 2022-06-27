import React from 'react';
import { MonthOptionType, SelectOptionType } from '../../../types';
import Select from '../../UI/Inputs/Select';
import classes from './MonthInput.module.css';

type Props = {};

const buildYearOptions = (year: number): SelectOptionType[] => {
  const yearList = new Array(10).fill(year).map((y, index) => y - index);
  const yearOptions = yearList.map((y): SelectOptionType => {
    return {
      label: y.toString(),
      value: y,
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
    <div className={classes.container}>
      <Select
        options={monthOptions}
        className={classes.month}
        label='Month'
      ></Select>
      <Select
        options={buildYearOptions(currentYear)}
        className={classes.year}
        label='Year'
      ></Select>
    </div>
  );
};

export default MonthInput;
