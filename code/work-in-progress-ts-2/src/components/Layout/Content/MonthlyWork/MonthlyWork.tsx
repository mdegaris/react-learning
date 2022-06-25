import React from 'react';
import Card from '../../../UI/Card';
import WorkFilter from '../../../Cards/WorkFilter';
import classes from './MonthlyWork.module.css';

type Props = {};

const MonthlyWork = (props: Props) => {
  return (
    <div className={classes.container}>
      <WorkFilter />
      {/* <Card />
      <Card /> */}
    </div>
  );
};

export default MonthlyWork;
