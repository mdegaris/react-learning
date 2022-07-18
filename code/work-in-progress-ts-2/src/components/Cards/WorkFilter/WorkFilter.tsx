import React from 'react';
import DateInput from '../../Inputs/DateInput';
import ServiceInput from '../../Inputs/ServiceInput';
import StudyInput from '../../Inputs/StudyInput';
import Card from '../../UI/Card';
import styles from './WorkFilter.module.css';

type Props = {};

const WorkFilter = (props: Props) => {
  return (
    <Card className={styles.container}>
      <DateInput />
      <ServiceInput />
      <StudyInput />
    </Card>
  );
};

export default WorkFilter;
