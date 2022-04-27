import Header from '../Header/Header';
import MealsSummary from '../Meals/MealsSummary/MealsSummary';
import MealList from '../Meals/MealList/MealList';

const Layout = ({ onShowCart }) => {
  return (
    <div>
      <Header title='ReactMeals' onShowCart={onShowCart} />
      <main>
        <MealsSummary />
        <MealList />
      </main>
    </div>
  );
};

export default Layout;
