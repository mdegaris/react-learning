import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalInCart = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalInCart}</span>
    </button>
  );
};

export default CartButton;
