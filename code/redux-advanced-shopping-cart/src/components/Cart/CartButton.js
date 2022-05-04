import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/cart';

const CartButton = () => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
