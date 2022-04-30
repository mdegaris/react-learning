import { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import useHttp from '../../../hooks/use-http';
import Config from '../../../config/config-options';

const MealList = () => {
  const [menu, setMenu] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    fetchMeals(
      {
        url: Config.MEAL_LIST_URL,
      },
      setMenu
    );
  }, [fetchMeals]);

  return (
    <Card className={styles.meals}>
      {error && <p>{error}</p>}
      {isLoading && !error && <p>Loading meals...</p>}
      {!isLoading && !error && (
        <ul>
          {menu.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default MealList;
