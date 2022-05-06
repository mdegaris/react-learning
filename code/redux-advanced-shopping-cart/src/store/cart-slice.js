import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { cartItems: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      if (!action.payload) {
        state = initialCartState;
      } else {
        state.cartItems = action.payload.cartItems;
        state.totalQuantity = action.payload.totalQuantity;
      }
    },
    addItem(state, action) {
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        total: action.payload.price,
        quantity: 1,
      };
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (itemIndex > -1) {
        state.cartItems[itemIndex].quantity++;
        state.cartItems[itemIndex].total += newItem.price;
      } else {
        state.cartItems = state.cartItems.concat(newItem);
      }

      state.totalQuantity++;
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      const iIndex = state.cartItems.findIndex((i) => i.id === itemId);

      if (iIndex > -1) {
        console.log(state.cartItems[iIndex]);
        state.cartItems[iIndex].quantity++;
        state.cartItems[iIndex].total += state.cartItems[iIndex].price;
        state.totalQuantity++;
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
        state.totalQuantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
