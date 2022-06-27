import React from 'react';
import Select from 'react-select';
import { AppProps, SelectOptionType } from '../../../types/types';
import classes from './Input.module.css';

type StudyOption = {
  readonly value: string;
  readonly label: string;
};

const testOptions: StudyOption[] = [
  {
    value: 'option1',
    label: 'option1',
  },
  {
    value: 'option2',
    label: 'option2',
  },
  {
    value: 'option3',
    label: 'option3',
  },
  {
    value: 'option4',
    label: 'option4',
  },
  {
    value: 'option5',
    label: 'option5',
  },
];

interface Props extends AppProps {
  label: string;
  options?: SelectOptionType[] | null;
}

const Input = ({ label, className = '', options = null }: Props) => {
  const inputClass = classes.input + ' ' + className;

  return (
    <React.Fragment>
      <label htmlFor={label} className={classes.label}>
        {label}
      </label>
      <div className={inputClass}>
        {options && <Select id={label} options={options} />}
      </div>
    </React.Fragment>
  );
};

export default Input;
