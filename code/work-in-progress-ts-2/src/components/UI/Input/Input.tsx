import React from 'react';
import Select from 'react-select';
import { isClassExpression } from 'typescript';
import classes from './Input.module.css';

type StudyOption = {
  readonly value: string;
  readonly label: string;
};

const studyOptions: StudyOption[] = [
  {
    value: 'CYP0694',
    label: 'CYP0694',
  },
  {
    value: 'CYP1822',
    label: 'CYP1822',
  },
  {
    value: 'CYP1676',
    label: 'CYP1676',
  },
  {
    value: 'CYP0244',
    label: 'CYP0244',
  },
  {
    value: 'CYP0323',
    label: 'CYP0323',
  },
];

type Props = {
  label?: string | null;
};

const Input = ({ label = null }: Props) => {
  return (
    <div className={classes.container}>
      {label != null ? (
        <>
          <label htmlFor='select' className={classes.label}>
            {label}
          </label>
          <div className={classes.input}>
            <Select id='select' options={studyOptions} />
          </div>
        </>
      ) : (
        <Select id='select' options={studyOptions} />
        // <Select options={studyOptions} />
      )}
      {/* <label htmlFor='namedInput'>Name:</label>
      <input id='namedInput' type='text' name='name' /> */}
    </div>
  );
};

export default Input;
