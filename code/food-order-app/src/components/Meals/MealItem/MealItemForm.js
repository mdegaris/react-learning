import React, { useState, useRef } from 'react';
import Input from '../../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ meal, addToCart }) => {
    const [validInput, setValidInput] = useState(true);
    const amountInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const amountVal = +amountInput.current.value;
        if (amountVal < 0 || amountVal > 5) {
            setValidInput(false);
            return;
        }

        setValidInput(true);
        console.log('add meal', meal.id, amountVal);
        addToCart(amountVal);
    };

    return (
        <div className={styles.form}>
            <form>
                <Input
                    ref={amountInput}
                    label='Amount'
                    type='number'
                    min='1'
                    max='5'
                    defaultValue='1'
                />
                {!validInput && <p className={styles.error}>Invalid amount</p>}
                <button type='submit' onClick={submitHandler}>
                    +Add
                </button>
            </form>
        </div>
    );
};

export default MealItemForm;
