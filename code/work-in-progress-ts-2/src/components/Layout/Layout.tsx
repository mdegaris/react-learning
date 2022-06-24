import React from 'react';
import Header from './Header';
import Content from './Content/Content';
import Footer from './Footer';
import classes from './Layout.module.css';
import Navbar from './Navbar';

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
