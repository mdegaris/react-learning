import React, { useState } from 'react';
import Header from '../Header/Header';
import MealsSummary from '../Meals/MealsSummary/MealsSummary';
import MealList from '../Meals/MealList/MealList';
import Cart from '../Cart/Cart';

const Layout = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header title='ReactMeals' showCartHandler={showCartHandler} />
      <MealsSummary />
      <MealList />
    </div>
  );
};

export default Layout;
