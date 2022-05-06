import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const saveCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'saving',
        title: 'Saving',
        message: 'Saving cart data...',
      })
    );

    const saveData = async () => {
      const response = await fetch(
        'https://redux-shopping-app-61d4f-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cartData) }
      );

      if (!response.ok) {
        throw new Error('Could not send cart data to the server.');
      }
    };

    try {
      await saveData();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Cart data successfully saved.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error while attempting to save cart data.',
        })
      );
    }
  };
};

export const loadCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'loading',
        title: 'Loading',
        message: 'Loading cart data...',
      })
    );

    const doFetch = async () => {
      const response = await fetch(
        'https://redux-shopping-app-61d4f-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Problem fetching cart data.');
      }

      return await response.json();
    };

    try {
      const cartData = await doFetch();
      dispatch(cartActions.replaceCart(cartData));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Cart data successfully loaded.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error while attempting to fetch cart data.',
        })
      );
    }
  };
};
