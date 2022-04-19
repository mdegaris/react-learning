import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ meal }) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        cartCtx.addMeal(meal, amount);
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>£{meal.price}</div>
            </div>
            <MealItemForm meal={meal} addToCart={addToCartHandler} />
        </li>
    );
};

export default MealItem;
