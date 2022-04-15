import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import DUMMY_MEALS from '../../store/dummy-meals';
import DUMMY_CART_ITEMS from '../../store/dummy-cart';
import styles from './AvailableMeals.module.css';

const MealList = () => {
    const [mealItems, setMealItems] = useState(DUMMY_MEALS);

    return (
        <Card className={styles.meals}>
            <ul>
                {mealItems.map((meal) => (
                    <MealItem
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default MealList;
