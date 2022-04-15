import React from 'react';
import { useState } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    addItem: () => {},
});

export const CartContextProvider = ({}) => {
    const [cartItems, setCartItems] = useState([]);

    const addMeal = ({ meal }) => {
        setCartItems([...cartItems, meal]);
    };

    const removeMeal = (id) => {
        setCartItems();
    };
};

export default CartContext;
