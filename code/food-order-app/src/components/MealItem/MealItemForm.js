import React, { useState, useContext, useRef } from 'react';
import Input from '../UI/Input/Input';
import CartContext from '../../store/cart-context';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ meal }) => {
    const cartCtx = useContext(CartContext);
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
            cartCtx.addMeal(meal, amountVal);
        }
    };

    const amountChangeHandler = () => {
        const amountVal = +amountInput.current.value;
        if (amountVal && amountVal < 1) {
            setAmount(1);
        } else {
            setAmount(amountVal);
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
                    min='1'
                    max='5'
                    defaultValue='1'
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
