import { useReducer } from 'react';
import CartContext from './cart-context';

const CartActions = {
  ADD: 'ADD',
  UPDATE_AMOUNT: 'UPDATE_AMOUNT',
};

const emptyCart = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (cartState, cartAction) => {
  const tallyAmount = (cartItems) => {
    return cartItems.reduce((prev, curr) => prev + curr.amount, 0);
  };

  const tallyPrice = (cartItems) => {
    return cartItems.reduce((prev, curr) => prev + curr.amount * curr.price, 0);
  };

  const updateItemAmount = (id, amountAdjust) => {
    let updatedCart = cartState.items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + amountAdjust };
      } else {
        return item;
      }
    });

    updatedCart = updatedCart.filter((item) => item.amount > 0);
    return updatedCart;
  };

  if (cartAction.type === CartActions.ADD) {
    // Ascertain if the item is already in the cart.
    const existingItem = cartState.items.find(
      (item) => item.id === cartAction.item.id
    );

    let updatedCartItems;
    if (existingItem) {
      // Update amount if item already in the cart.
      updatedCartItems = updateItemAmount(
        cartAction.item.id,
        cartAction.item.amount
      );
    } else {
      // Else add item to the cart.
      updatedCartItems = [...cartState.items, cartAction.item];
    }

    return {
      items: updatedCartItems,
      totalAmount: tallyAmount(updatedCartItems),
      totalPrice: tallyPrice(updatedCartItems),
    };
  }

  // Nudge the item amount up or down.
  if (cartAction.type === CartActions.UPDATE_AMOUNT) {
    const updatedCartItems = updateItemAmount(cartAction.id, cartAction.amount);

    return {
      items: updatedCartItems,
      totalAmount: tallyAmount(updatedCartItems),
      totalPrice: tallyPrice(updatedCartItems),
    };
  }

  return emptyCart;
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, emptyCart);

  const addMealHandler = (meal, amount) => {
    dispatchCartAction({
      type: CartActions.ADD,
      item: { ...meal, amount: amount },
    });
  };

  const adjustAmountHandler = (id, amount) => {
    dispatchCartAction({
      type: CartActions.UPDATE_AMOUNT,
      id: id,
      amount: amount,
    });
  };

  const cartContext = {
    cartItems: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addMeal: addMealHandler,
    adjustAmount: adjustAmountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
