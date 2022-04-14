import React from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ noOfCartItems }) => {
    return (
        <div className={styles.bump}>
            <div className={styles.button}>
                <div className={styles.icon}>
                    <CartIcon />
                </div>
                <div>Your Cart</div>
                <div className={styles.badge}>{noOfCartItems}</div>
            </div>
        </div>
    );
};

export default HeaderCartButton;
