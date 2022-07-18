import React, { useEffect } from 'react';
import Layout from './components/Layout';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchAllStudyOptions } from './store/studyOptions/actions';
import { fetchServiceList } from './store/serviceList/actions';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { month, year } = useAppSelector((state) => state.workFilter);

  useEffect(() => {
    dispatch(fetchAllStudyOptions());
  }, []);

  useEffect(() => {
    dispatch(fetchServiceList({ month, year }));
  }, [month, year]);

  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default App;
