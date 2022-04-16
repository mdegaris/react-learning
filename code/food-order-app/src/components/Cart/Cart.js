import React, { useState, useContext } from 'react';
import CartItem from './CartItem';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const Cart = ({ setShowCart }) => {
    const ctx = useContext(CartContext);

    const exitCartHandler = () => {
        setShowCart(false);
    };

    return (
        <Modal outsideHandler={exitCartHandler}>
            <div className={styles['cart-items']}>
                {ctx.cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className={styles.total}>Total Amount</div>
            <div className={styles.actions}>
                <button
                    className={styles['button--alt']}
                    onClick={exitCartHandler}
                >
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
