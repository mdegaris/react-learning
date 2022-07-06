import React from 'react';
import { AppProps } from '../../../types';
import styles from './Input.module.css';

interface InputProps extends AppProps {
  name: string;
  label: string;
}

const Input = ({ name, label, className = '' }: InputProps) => {
  const inputClass = styles.input + ' ' + className;

  return (
    <React.Fragment>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={inputClass}>
        <input id={label} name={label} type='text' />
      </div>
    </React.Fragment>
  );
};

export default Input;
