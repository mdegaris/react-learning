import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/cart';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalInCart = useSelector((state) => state.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalInCart}</span>
    </button>
  );
};

export default CartButton;
