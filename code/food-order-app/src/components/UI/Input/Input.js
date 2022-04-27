import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const { className, label, input } = { ...props };
  const classes = `${styles.input} ${className}`;

  return (
    <div className={classes}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
