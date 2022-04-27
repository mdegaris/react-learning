import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const CartList = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles['cart-items']}>
      {cartCtx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartCtx.adjustAmount.bind(null, item.id, 1)}
          onSubtract={cartCtx.adjustAmount.bind(null, item.id, -1)}
        />
      ))}
    </div>
  );
};

export default CartList;
