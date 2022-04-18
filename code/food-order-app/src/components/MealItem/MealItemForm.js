import React, { useState, useContext, useRef } from 'react';
import Input from '../UI/Input/Input';
import CartContext from '../../store/cart-context';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ meal }) => {
    const ctx = useContext(CartContext);
    const [amount, setAmount] = useState(1);
    const [validInput, setValidInput] = useState(true);
    const amountInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const amountVal = +amountInput.current.value;
        if (amountVal < 0 || amountVal > 5) {
            setValidInput(false);
        } else {
            setValidInput(true);
            ctx.addMeal(meal, amountVal);
        }
    };

    const amountChangeHandler = (event) => {
        const amountValue = event.target.value;

        console.log(`amountValue: ${amountValue}`);
        if (amountValue && +amountValue < 1) {
            setAmount(1);
        } else {
            setAmount(+amountValue);
        }
    };

    return (
        <div className={styles.form}>
            <form>
                <Input
                    ref={amountInput}
                    label='Amount'
                    value={amount}
                    type='number'
                    onChange={amountChangeHandler}
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
