import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(
    ({ label, name, value, type, onChange, className }, ref) => {
        const classes = `${styles.input} ${className}`;
        return (
            <div className={classes}>
                <label htmlFor={name}>{label}</label>
                <input
                    ref={ref}
                    name={name}
                    value={value}
                    type={type}
                    onChange={onChange}
                />
            </div>
        );
    }
);

export default Input;
