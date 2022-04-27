import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [bumpButton, setBumpButton] = useState(false);

  useEffect(() => {
    if (cartCtx.cartItems.length === 0) {
      return;
    }
    setBumpButton(true);

    const bumpTimer = setTimeout(() => {
      setBumpButton(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [cartCtx.cartItems]);

  return (
    <>
      <div className={`${bumpButton ? styles.bump : ''}`} onClick={onClick}>
        <div className={styles.button}>
          <div className={styles.icon}>
            <CartIcon />
          </div>
          <div>Your Cart</div>
          <div className={styles.badge}>{cartCtx.totalAmount}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderCartButton;
