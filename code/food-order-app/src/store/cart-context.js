import React from 'react';

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
  addMeal: (meal) => {},
  adjustAmount: (id, amount) => {},
});

export default CartContext;
