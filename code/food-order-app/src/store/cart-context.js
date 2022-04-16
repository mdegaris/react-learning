import React from 'react';
import { useState } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addMeal: (meal) => {},
    removeMeal: (id) => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const updateAmountInCart = (id, newAmount) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, amount: newAmount };
            } else {
                return item;
            }
        });

        return newCartItems;
    };

    const addMealHandler = (meal, amount) => {
        console.log(`Add meal: ${meal} ${amount}`);
        const amountNumber = +amount;

        const addMeal = cartItems.find((m) => m.id === meal.id);
        if (addMeal) {
            const newAmount = addMeal.amount + amountNumber;
            setCartItems(updateAmountInCart(addMeal.id, newAmount));
        } else {
            setCartItems([...cartItems, meal]);
        }

        setTotalAmount(totalAmount + amountNumber);
    };

    const removeMealHandler = (mealId) => {
        const index = cartItems.findIndex((m) => m.id === mealId);
        if (index >= 0) {
            const removeMeal = cartItems[index];
            if (--removeMeal.amount === 0) {
                setCartItems(cartItems.filter((m) => m.id !== removeMeal.id));
            }
        }

        setTotalAmount(totalAmount - 1);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                totalAmount: totalAmount,
                addMeal: addMealHandler,
                removeMeal: removeMealHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
