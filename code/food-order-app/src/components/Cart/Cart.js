import React from 'react';
import CartList from './CartList';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = ({ setShowCart }) => {
    const exitCartHandler = () => {
        setShowCart(false);
    };

    return (
        <Modal outsideHandler={exitCartHandler}>
            <div>
                <CartList />
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
