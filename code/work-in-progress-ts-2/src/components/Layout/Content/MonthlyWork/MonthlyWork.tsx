import React from 'react';
import Card from '../../../UI/Card';
import WorkFilter from '../../../Cards/WorkFilter';

type Props = {};

const MonthlyWork = (props: Props) => {
  return (
    <div>
      <WorkFilter />
      <Card />
      <Card />
    </div>
  );
};

export default MonthlyWork;
