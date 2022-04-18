import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const { className, label } = { ...props };
    const classes = `${styles.input} ${className}`;
    return (
        <div className={classes}>
            <label {...props}>{label}</label>
            <input ref={ref} {...props} />
        </div>
    );
});

export default Input;
