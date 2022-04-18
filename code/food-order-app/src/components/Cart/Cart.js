import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const Cart = ({ setShowCart }) => {
    const cartCtx = useContext(CartContext);
    const displayTotalPrice = `£${cartCtx.totalPrice.toFixed(2)}`;

    const exitCartHandler = () => {
        setShowCart(false);
    };

    return (
        <Modal outsideHandler={exitCartHandler}>
            <div className={styles['cart-items']}>
                {cartCtx.cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={cartCtx.adjustAmount.bind(null, item.id, 1)}
                        onSubtract={cartCtx.adjustAmount.bind(
                            null,
                            item.id,
                            -1
                        )}
                    />
                ))}
            </div>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{displayTotalPrice}</span>
            </div>
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
