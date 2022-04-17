import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addMeal: (meal) => {},
    // removeMeal: (id) => {},
    adjustAmount: (id, amount) => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(
            cartItems
                .map((item) => item.amount)
                .reduce((amnt1, amnt2) => amnt1 + amnt2, 0)
        );
    }, [cartItems, setTotalAmount]);

    const buildUpdatedCart = (id, amountMod) => {
        let newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                const newAmount = item.amount + amountMod;
                return { ...item, amount: newAmount };
            } else {
                return item;
            }
        });

        newCartItems = newCartItems.filter((item) => item.amount > 0);
        return newCartItems;
    };

    const addMealHandler = (meal, amount) => {
        // console.log(`Add meal: ${meal} ${amount}`);
        const amountNumber = +amount;

        const addMeal = cartItems.find((m) => m.id === meal.id);
        if (addMeal) {
            setCartItems(buildUpdatedCart(addMeal.id, amountNumber));
        } else {
            setCartItems([...cartItems, { ...meal, amount: amountNumber }]);
        }
    };

    const adjustAmountHandler = (mealId, amount) => {
        setCartItems(buildUpdatedCart(mealId, amount));
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                totalAmount: totalAmount,
                addMeal: addMealHandler,
                adjustAmount: adjustAmountHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
