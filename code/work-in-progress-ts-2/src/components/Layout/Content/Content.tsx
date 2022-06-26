import React from 'react';
import MonthlyWork from './MonthlyWork';
import classes from './Content.module.css';

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={classes.content}>
      <MonthlyWork />
    </div>
  );
};

export default Content;
