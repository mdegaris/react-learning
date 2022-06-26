import React from 'react';
import Card from '../../UI/Card';
import Input from '../../UI/Input/Input';
import classes from './WorkFilter.module.css';

type Props = {};

const WorkFilter = (props: Props) => {
  return (
    <Card className={classes.container}>
      <Input label='Month: ' />
      <Input label='Service Group: ' />
      <Input label='Study/PM: ' />
    </Card>
  );
};

export default WorkFilter;
