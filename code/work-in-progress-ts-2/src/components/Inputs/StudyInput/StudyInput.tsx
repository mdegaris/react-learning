import React, { useState } from 'react';
import { useAppSelector } from '../../../state/hooks';
import {
  StudyManagerOptionType,
  StudyIdOptionType,
  AllOptionType,
} from '../../../types';
import Select from '../../UI/Inputs/Select';
import styles from './StudyInput.module.css';

type Props = {};

const StudyInput = (props: Props) => {
  const [studyMangerList, setStudyManagerList] = useState<
    StudyManagerOptionType[]
  >([]);

  const { loading, studyOptions } = useAppSelector(
    (state) => state.allStudyOptions
  );

  const allOption: AllOptionType = {
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

// const studyOptions: StudyIdOptionType[] = [
//   {
//     value: 'All',
//     label: 'All',
//   },
//   {
//     label: 'Darren Jones',
//     value: 'Darren Jones',
//   },
//   {
//     label: 'Adrian Walker',
//     value: 'Adrian Walker',
//   },
//   {
//     label: 'James Harrison',
//     value: 'James Harrison',
//   },
//   {
//     label: 'Rosie Scaril',
//     value: 'Rosie Scaril',
//   },
//   {
//     label: 'CYP0267',
//     value: 'CYP0267',
//   },
//   {
//     label: 'CYP0323',
//     value: 'CYP0323',
//   },
//   {
//     label: 'CYP0694',
//     value: 'CYP0694',
//   },
//   {
//     label: 'CYP1143',
//     value: 'CYP1143',
//   },
//   {
//     label: 'CYP1822',
//     value: 'CYP1822',
//   },
//   {
//     label: 'CYP1827',
//     value: 'CYP1827',
//   },
// ];
