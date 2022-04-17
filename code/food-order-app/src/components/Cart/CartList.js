import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const CartList = () => {
    const ctx = useContext(CartContext);

    return (
        <div className={styles['cart-items']}>
            {ctx.cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;
