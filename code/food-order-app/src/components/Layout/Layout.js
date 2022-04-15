import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MealsSummary from '../MealsSummary/MealsSummary';
import MealList from '../MealList/MealList';

const Layout = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div>
            <Header title="ReactMeals" noOfCartItems={cartItems.length} />
            <MealsSummary />
            <MealList />
        </div>
    );
};

export default Layout;
