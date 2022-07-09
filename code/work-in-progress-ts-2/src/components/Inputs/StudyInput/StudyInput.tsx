import React, { useState } from 'react';
import { useAppSelector } from '../../../state/hooks';
import { StudyManagerOption, AllOption } from '../../../types';
import Select from '../../UI/Inputs/Select';
import styles from './StudyInput.module.css';

type Props = {};

const StudyInput = (props: Props) => {
  const [studyMangerList, setStudyManagerList] = useState<StudyManagerOption[]>(
    []
  );

  const { loading, studyOptions } = useAppSelector(
    (state) => state.allStudyOptions
  );

  const allOption: AllOption = {
    label: 'All',
    value: 'All',
  };

  const studySelectOptions = [
    {
      label: '',
      options: [allOption],
    },
    {
      label: 'Study Manager',
      options: studyOptions.studyManagerOptions,
    },
    {
      label: 'Studies',
      options: studyOptions.studyIdOptions,
    },
  ];

  return (
    <div className={styles.container}>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Select
          id='study-select'
          options={studySelectOptions}
          className={styles.select}
          label='Service Group'
        ></Select>
      )}
    </div>
  );
};

export default StudyInput;
