import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = ({ title, noOfCartItems }) => {
    return (
        <div>
            <div className={styles.header}>
                <h1>{title}</h1>
                <HeaderCartButton noOfCartItems={noOfCartItems} />
            </div>
            <div className={styles['main-image']}>
                <img src="meals.jpg" alt="Meals" />
            </div>
        </div>
    );
};

export default Header;
