import React from 'react';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ meal }) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>£{meal.price}</div>
            </div>
            <MealItemForm meal={meal} />
        </li>
    );
};

export default MealItem;
