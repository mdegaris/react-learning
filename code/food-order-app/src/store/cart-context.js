import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addMeal: (meal) => {},
    adjustAmount: (mealId, amount) => {},
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate and set the total amount of items in the cart.
    useEffect(() => {
        setTotalAmount(
            cartItems
                .map((item) => item.amount)
                .reduce((amnt1, amnt2) => amnt1 + amnt2, 0)
        );
    }, [cartItems, setTotalAmount]);

    // Update the amount of a given cart item.
    const updateItemAmount = (id, amountMod) => {
        let newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount + amountMod };
            } else {
                return item;
            }
        });

        newCartItems = newCartItems.filter((item) => item.amount > 0);
        return newCartItems;
    };

    const addMealHandler = (meal, amount) => {
        // Ascertain if the meal is already in the cart.
        const cartItem = cartItems.find((m) => m.id === meal.id);
        if (cartItem) {
            // Update amount if meal already in the cart.
            setCartItems(updateItemAmount(cartItem.id, amount));
        } else {
            // Else add meal to the cart.
            setCartItems([...cartItems, { ...meal, amount: amount }]);
        }
    };

    const adjustAmountHandler = (mealId, amount) => {
        setCartItems(updateItemAmount(mealId, amount));
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
