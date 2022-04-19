import React from 'react';
import { useState } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../../store/dummy-meals';

const MealList = () => {
    const [mealItems] = useState(DUMMY_MEALS);

    return (
        <Card className={styles.meals}>
            <ul>
                {mealItems.map((meal) => (
                    <MealItem key={meal.id} meal={meal} />
                ))}
            </ul>
        </Card>
    );
};

export default MealList;
