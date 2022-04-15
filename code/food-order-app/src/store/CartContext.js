import React from 'react';
import { useState } from 'react';

const CartContext = React.createContext({
    cartItems: [],
    addItem: () => {},
});

export const CartContextProvider = ({}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = ({ meal }) => {
        setCartItems([...cartItems, meal]);
    };
};

export default CartContext;
