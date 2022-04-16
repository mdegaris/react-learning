import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, value, onChange, className }) => {
    const classes = `${styles.input} ${className}`;
    return (
        <div className={classes}>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                type="number"
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
