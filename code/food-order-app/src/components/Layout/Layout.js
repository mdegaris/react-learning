import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MealsSummary from '../MealsSummary/MealsSummary';
import MealList from '../MealList/MealList';

const Layout = ({ cartItems }) => {
    return (
        <div>
            <Header title="ReactMeals" cartItems={cartItems} />
            <MealsSummary />
            <MealList />
        </div>
    );
};

export default Layout;
