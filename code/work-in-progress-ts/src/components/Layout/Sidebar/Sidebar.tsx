import React from 'react';
import Navbar from '../../Navbar';
import classes from './Sidebar.module.css';

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  return (
    <div className={classes.sidebar}>
      <Navbar />
    </div>
  );
};

export default Sidebar;
