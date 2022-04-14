import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import MealList from './components/MealList/MealList';
import DUMMY_MEALS from './db/dummy-meals';
import { useState } from 'react';

function App() {
    const [mealItems, setMealItems] = useState(DUMMY_MEALS);
    const [cartItems, setCartItems] = useState([]);

    return (
        <div>
            <Header title="ReactMeals" noOfCartItems={cartItems.length} />
            <MealsSummary />
            <MealList mealItems={mealItems} />
        </div>
    );
}

export default App;
