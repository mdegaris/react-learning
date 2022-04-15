import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import CartIcon from './CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ cartItems }) => {
    const [showCart, setShowCart] = useState(false);

    const cartClickHandler = () => {
        setShowCart(true);
    };

    return (
        <>
            {showCart && (
                <Cart setShowCart={setShowCart} cartItems={cartItems} />
            )}
            <div className={styles.bump} onClick={cartClickHandler}>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <CartIcon />
                    </div>
                    <div>Your Cart</div>
                    <div className={styles.badge}>{cartItems.length}</div>
                </div>
            </div>
        </>
    );
};

export default HeaderCartButton;
