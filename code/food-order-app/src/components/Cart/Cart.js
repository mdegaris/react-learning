import React, { useState } from 'react';
import CartItem from './CartItem';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = ({ cartItems, setShowCart }) => {
    const [totoalAmount, setTotalAmount] = useState(0);

    const exitCartHandler = () => {
        setShowCart(false);
    };

    return (
        <Modal outsideHandler={exitCartHandler}>
            <div className={styles['cart-items']}>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        // amount=
                    />
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
