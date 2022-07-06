import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  title: string;
  user: string;
};

const Header = ({ title, user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div>{user}</div>
    </header>
  );
};

export default Header;
