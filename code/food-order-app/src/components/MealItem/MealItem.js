import React from 'react';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ name, description, price }) => {
    console.log(name);
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>£{price}</div>
            </div>
            <MealItemForm />
        </li>
    );
};

export default MealItem;
