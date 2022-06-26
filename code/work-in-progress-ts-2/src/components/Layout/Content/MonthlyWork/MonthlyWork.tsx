import React from 'react';
import WorkFilter from '../../../Cards/WorkFilter';
import ServiceList from '../../../Cards/ServiceList';
import ServiceDetail from '../../../Cards/ServiceDetail';
import classes from './MonthlyWork.module.css';

type Props = {};

const MonthlyWork = (props: Props) => {
  return (
    <div className={classes.container}>
      <WorkFilter />
      <ServiceList />
      <ServiceDetail />
    </div>
  );
};

export default MonthlyWork;
