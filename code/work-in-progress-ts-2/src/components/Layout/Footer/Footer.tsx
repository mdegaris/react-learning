import React from 'react';
import classes from './Footer.module.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={classes.footer}>
      <div>{new Date().toDateString()}</div>
      <div>Version: Messing-about</div>
    </footer>
  );
};

export default Footer;
