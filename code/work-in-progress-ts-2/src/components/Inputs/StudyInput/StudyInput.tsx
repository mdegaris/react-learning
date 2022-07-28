import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import Select from '../../UI/Inputs/Select/Select';
import styles from './StudyInput.module.css';

type Props = {};

const StudyInput = () => {
  const { isLoading: loading, studyOptions } = useAppSelector(
    (state) => state.allStudyOptions
  );

  const props = { isLoading: loading, placeholder: 'Study / Study Manager' };

  return (
    <div className={styles.container}>
      <Select
        id='study-select'
        label='Study'
        options={studyOptions}
        className={styles.select}
        props={props}
      ></Select>
    </div>
  );
};

export default StudyInput;
