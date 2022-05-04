import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { cartItems: [], showCart: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      console.log(state);
      console.log(state.cartItems);
      const newItem = action.payload.item;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      console.log(itemIndex);

      if (itemIndex > -1) {
        state.cartItems[itemIndex].quantity++;
        state.cartItems[itemIndex].total += newItem.price;
      } else {
        state.cartItems = state.cartItems.concat({
          ...newItem,
          total: newItem.price,
        });
      }
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      const iIndex = state.cartItems.findIndex((i) => i.id === itemId);

      if (iIndex > -1) {
        console.log(state.cartItems[iIndex]);
        state.cartItems[iIndex].quantity++;
        state.cartItems[iIndex].total += state.cartItems[iIndex].price;
      }
    },
    decrementQuantity(state, action) {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);

      if (itemIndex > -1) {
        state.cartItems[itemIndex].quantity--;

        if (state.cartItems[itemIndex].quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        } else {
          state.cartItems[itemIndex].total -= state.cartItems[itemIndex].price;
        }
      }
    },
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
