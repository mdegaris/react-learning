import React from 'react';
import Header from '../Header/Header';
import MealsSummary from '../Meals/MealsSummary/MealsSummary';
import MealList from '../Meals/MealList/MealList';

const Layout = ({ cartItems }) => {
    return (
        <div>
            <Header title='ReactMeals' />
            <MealsSummary />
            <MealList />
        </div>
    );
};

export default Layout;
