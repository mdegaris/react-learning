import React from 'react';
import MonthInput from '../../Inputs/MonthInput';
import Card from '../../UI/Card';
import classes from './WorkFilter.module.css';

type Props = {};

const WorkFilter = (props: Props) => {
  return (
    <Card className={classes.container}>
      <MonthInput />
      <MonthInput />
      <MonthInput />
    </Card>
  );
};

export default WorkFilter;
