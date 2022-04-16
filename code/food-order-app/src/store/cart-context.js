import React from 'react';
import { useState, useEffect } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addMeal: (meal) => {},
    removeMeal: (id) => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        if (cartItems.length > 0) {
            setTotalAmount(cartItems.reduce((i1, i2) => i1.amount + i2.amount));
        } else {
            setTotalAmount(0);
        }
    }, [cartItems, setTotalAmount]);

    const updateAmountInCart = (id, amountMod) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                const newAmount = item.amount + amountMod;
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
            setCartItems(updateAmountInCart(addMeal.id, amountNumber));
        } else {
            setCartItems([...cartItems, { ...meal, amount: amount }]);
        }
    };

    const removeMealHandler = (mealId) => {
        const index = cartItems.findIndex((m) => m.id === mealId);
        if (index >= 0) {
            const removeMeal = cartItems[index];
            if (--removeMeal.amount === 0) {
                setCartItems(cartItems.filter((m) => m.id !== removeMeal.id));
            }
        }
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
