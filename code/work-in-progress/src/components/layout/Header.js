import React, { Fragment } from 'react';
import classes from './Header.module.css';
import MainNav from './MainNav';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}></div>
      </header>
      <MainNav />
    </Fragment>
  );
};

export default Header;
