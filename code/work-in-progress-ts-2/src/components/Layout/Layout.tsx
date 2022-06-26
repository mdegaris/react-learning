import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';
import classes from './Layout.module.css';

type LayoutProps = {};

const Layout = (props: LayoutProps) => {
  return (
    <main className={classes['layout-container']}>
      <Header title='Work In Progress' user='Marc' />
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
};

export default Layout;
