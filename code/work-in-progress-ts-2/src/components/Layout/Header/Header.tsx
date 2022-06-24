import React from 'react';
import classes from './Header.module.css';

type HeaderProps = {
  title: string;
  user: string;
};

const Header = ({ title, user }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>{title}</div>
      <div>{user}</div>
    </header>
  );
};

export default Header;
