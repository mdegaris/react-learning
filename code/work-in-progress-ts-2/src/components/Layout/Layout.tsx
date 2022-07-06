import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Layout.module.css';

type LayoutProps = {};

const Layout = (props: LayoutProps) => {
  return (
    <main className={styles['layout-container']}>
      <Header title='Work In Progress Center' user='Marc' />
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
};

export default Layout;
