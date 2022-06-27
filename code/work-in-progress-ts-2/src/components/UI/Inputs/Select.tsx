import React from 'react';
import ReactSelect from 'react-select';
import { AppProps, SelectOptionType } from '../../../types';
import classes from './Select.module.css';

const testOptions: SelectOptionType[] = [
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

interface SelectProps extends AppProps {
  label: string;
  options?: SelectOptionType[];
}

const Select = ({
  label,
  options = testOptions,
  className = '',
}: SelectProps) => {
  const inputClass = classes.input + ' ' + className;

  return (
    <React.Fragment>
      <label htmlFor={label} className={classes.label}>
        {label}
      </label>
      <div className={inputClass}>
        <ReactSelect id={label} options={options} />
      </div>
    </React.Fragment>
  );
};

export default Select;
