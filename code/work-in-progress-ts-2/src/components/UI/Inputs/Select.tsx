import React from 'react';
import ReactSelect from 'react-select';
import { GroupType, OptionType } from '../../../types';
import { AppProps } from '../../../types/props';
import styles from './Select.module.css';

interface SelectProps extends AppProps {
  id: string;
  label: string;
  options: OptionType[] | GroupType[];
}

const Select = ({ id, label, options, className = '' }: SelectProps) => {
  const inputClass = styles.input + ' ' + className;

  return (
    <React.Fragment>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={inputClass}>
        <ReactSelect id={id} options={options} isClearable={true} />
      </div>
    </React.Fragment>
  );
};

export default Select;
