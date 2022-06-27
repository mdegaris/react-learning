import React from 'react';
import MonthInput from '../../Inputs/MonthInput';
import Card from '../../UI/Card';
import Input from '../../UI/Input/Input';
import classes from './WorkFilter.module.css';

type Props = {};

const WorkFilter = (props: Props) => {
  return (
    <Card className={classes.container}>
      <MonthInput />
      {/* <Input label='Service Group' />
      <Input label='Study/PM' /> */}
    </Card>
  );
};

export default WorkFilter;
