import { useContext, useState } from 'react';
import Modal from '../UI/Modal/Modal';
import CartList from './CartList';
import CheckoutForm from './Checkout/CheckoutForm';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const displayTotalPrice = `£${cartCtx.totalPrice.toFixed(2)}`;
  const isEmpty = cartCtx.totalAmount === 0;

  const onAddHandler = (item) => {
    cartCtx.adjustAmount(item.id, 1);
  };

  const onSubtractHandler = (item) => {
    cartCtx.adjustAmount(item.id, -1);
  };

  const showCheckoutHandler = () => {
    setShowCheckout(true);
  };

  const cancelCheckoutHandler = () => {
    setShowCheckout(false);
  };

  const completeOrder = () => {
    setOrderComplete(true);
  };

  const cartItems = !isEmpty ? (
    <CartList onAdd={onAddHandler} onSubtract={onSubtractHandler} />
  ) : (
    <div className={styles.message}>Your cart is empty.</div>
  );

  const checkoutButton = (
    <button
      className={!isEmpty ? styles.button : styles.disabled}
      disabled={isEmpty ? true : false}
      onClick={showCheckoutHandler}
    >
      Checkout
    </button>
  );

  const cancelButton = (
    <button className={styles['button--alt']} onClick={onClose}>
      Close
    </button>
  );

  const cartActions = (
    <div className={styles.actions}>
      {cancelButton}
      {checkoutButton}
    </div>
  );

  const checkout = (
    <CheckoutForm
      onCancel={cancelCheckoutHandler}
      completeOrder={completeOrder}
    />
  );

  const cartContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{displayTotalPrice}</span>
      </div>
      {!showCheckout && cartActions}
      {showCheckout && checkout}
    </>
  );

  return (
    <Modal onBackdropClick={onClose}>
      {!orderComplete && cartContent}
      {orderComplete && (
        <div className={styles.message}>
          Order Complete
          <div className={styles.actions}>{cancelButton}</div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
