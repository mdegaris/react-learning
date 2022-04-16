import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ meal }) => {
    const ctx = useContext(CartContext);
    const [amount, setAmount] = useState(1);

    const addMealClick = (event) => {
        event.preventDefault();
        ctx.addMeal(meal, amount);
    };

    const amountChangeHandler = (event) => {
        const amountValue = event.target.value;

        console.log(`amountValue: ${amountValue}`);
        amountValue && setAmount(+amountValue);
    };

    return (
        <div className={styles.form}>
            <form action="">
                <Input
                    label="Amount"
                    name="amount"
                    value={amount}
                    onChange={amountChangeHandler}
                />
                <button type="submit" onClick={addMealClick}>
                    +Add
                </button>
            </form>
        </div>
    );
};

export default MealItemForm;
