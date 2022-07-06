import React, { useEffect } from 'react';
import Layout from './components/Layout';
import './App.css';
import { useAppDispatch } from './state/hooks';
import { fetchAllStudyData } from './state/actions/studyOptionsActions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllStudyData());
  }, []);

  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default App;
