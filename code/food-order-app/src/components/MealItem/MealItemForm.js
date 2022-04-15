import React from 'react';
import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <div className={styles.form}>
            <form action="">
                <Input
                    label="Amount"
                    name="amount"
                    // value={defaultValue}
                    className=""
                />
                <button>+Add</button>
            </form>
        </div>
    );
};

export default MealItemForm;
