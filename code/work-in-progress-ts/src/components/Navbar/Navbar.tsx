import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

import { useDispatch } from 'react-redux';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={classes.navbar}>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>Rounds List</li>
      <li>Service Matrix</li>
    </nav>
  );
};

export default Navbar;
