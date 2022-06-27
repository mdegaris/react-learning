import React from 'react';
import { SelectOptionType } from '../../../types/types';
import Input from '../../UI/Input';
import classes from './MonthInput.module.css';

type Props = {};

const monthOptions: SelectOptionType[] = [
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
];

const MonthInput = (props: Props) => {
  return (
    <div className={classes.container}>
      <Input
        options={monthOptions}
        className={classes.month}
        label='Month'
      ></Input>
      <Input className={classes.year} label='Year'></Input>
    </div>
  );
};

export default MonthInput;

/*
<div className={classes.container}>
{label != null ? (
  <>
    <label htmlFor='select' className={classes.label}>
      {label}
    </label>
    <div className={classes.input}>
      <Select id='select' options={studyOptions} />
    </div>
  </>
) : (
  <Select id='select' options={studyOptions} />
)}
*/
