import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import useHttp from '../../../hooks/use-http';

const MealList = () => {
  const [menu, setMenu] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    fetchMeals(
      {
        url: 'https://react-food-app-2158c-default-rtdb.firebaseio.com/meals.json',
      },
      setMenu
    );
  }, []);

  return (
    <Card className={styles.meals}>
      {isLoading && !error && <p>Loading meals...</p>}
      {!isLoading && !error && (
        <ul>
          {menu.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </Card>
  );
};

export default MealList;
