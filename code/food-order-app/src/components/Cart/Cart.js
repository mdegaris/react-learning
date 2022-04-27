import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import CartList from './CartList';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const displayTotalPrice = `£${cartCtx.totalPrice.toFixed(2)}`;
  const isEmpty = cartCtx.totalAmount === 0;

  return (
    <Modal onClickOutside={onClose}>
      <div className={styles['cart-items']}>
        {isEmpty && <div>Your cart is empty.</div>}
        {!isEmpty && <CartList />}
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{displayTotalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button
          className={!isEmpty ? styles.button : styles.disabled}
          disabled={!isEmpty ? true : false}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
