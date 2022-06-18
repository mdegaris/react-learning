import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import classes from './Layout.module.css';
import Content from './Content/Content';
import Footer from './Footer';

type LayoutProps = {};

const Layout = (props: LayoutProps) => {
  return (
    <main className={classes.main}>
      <Header title='Work In Progress' user='Marc' />
      <Sidebar />
      <Content />
      <Footer />
    </main>
  );
};

export default Layout;
