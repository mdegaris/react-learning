import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = ({ showCartHandler, title }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </>
  );
};

export default Header;
