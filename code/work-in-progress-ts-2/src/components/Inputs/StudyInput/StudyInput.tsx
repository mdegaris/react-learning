import React from 'react';
import { useAppSelector } from '../../../state/hooks';
import Select from '../../UI/Inputs/Select/Select';
import styles from './StudyInput.module.css';

type Props = {};

const StudyInput = (props: Props) => {
  const { loading, studyOptions } = useAppSelector(
    (state) => state.allStudyOptions
  );

  return (
    <div className={styles.container}>
      <Select
        id='study-select'
        label='Study'
        options={studyOptions}
        isLoading={loading}
        placeholder='Study / Study Manager'
        className={styles.select}
      ></Select>
    </div>
  );
};

export default StudyInput;
