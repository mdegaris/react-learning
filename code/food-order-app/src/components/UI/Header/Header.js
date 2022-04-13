import React from 'react';
import styles from './Header.module.css';

const Header = ({ title }) => {
    return (
        <>
            <header>
                <div className={styles.header}>{title}</div>
                <CardItem />
            </header>
            <div className={styles['main-image']}>
                <img src="meals.jpg" alt="Meals" />
            </div>
        </>
    );
};

export default Header;
