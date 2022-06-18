import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import classes from './Content.module.css';

type Props = {};

const Content = (props: Props) => {
  return (
    <main className={classes.content}>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default Content;
