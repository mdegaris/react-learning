import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    const cartClickHandler = () => {
        setShowCart(true);
    };

    return (
        <>
            {showCart && <Cart setShowCart={setShowCart} />}
            <div className={styles.bump} onClick={cartClickHandler}>
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
