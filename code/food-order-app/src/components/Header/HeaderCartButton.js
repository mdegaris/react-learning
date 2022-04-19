import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);
    const [bumpButton, setBumpButton] = useState(false);

    const cartClickHandler = () => {
        setShowCart(true);
    };

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
            {showCart && <Cart setShowCart={setShowCart} />}
            <div
                className={`${bumpButton ? styles.bump : ''}`}
                onClick={cartClickHandler}
            >
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
