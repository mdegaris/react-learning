import { Fragment } from 'react';
import Dashboard from '../../pages/Dashboard';
import Header from './Header';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Dashboard />
      </main>
    </Fragment>
  );
};

export default Layout;
