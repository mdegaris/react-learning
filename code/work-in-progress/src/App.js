import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from './components/layout/Layout';
import { fetchRoundsData } from './store/rounds-actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('fetchRoundsData');
    dispatch(fetchRoundsData());
  }, [dispatch]);

  return <Layout />;
}

export default App;
