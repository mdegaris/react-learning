import React from 'react';
import Card from '../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';

const MealList = ({ mealItems }) => {
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
