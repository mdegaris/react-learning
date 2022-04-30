import Header from '../Header/Header';
import MealsSummary from '../Meals/MealsSummary/MealsSummary';
import MealList from '../Meals/MealList/MealList';
import Config from '../../config/config-options';

const Layout = ({ onShowCart }) => {
  return (
    <div>
      <Header title={Config.APP_TITLE} onShowCart={onShowCart} />
      <main>
        <MealsSummary />
        <MealList />
      </main>
    </div>
  );
};

export default Layout;
