import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from './components/layout/Layout';
import { fetchRoundsData } from './store/rounds-actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshData = () => {
      console.log('refresh data...');
      dispatch(fetchRoundsData());
    };

    refreshData();
    const intermittentRefresh = setInterval(refreshData, 10000);

    return () => {
      clearInterval(intermittentRefresh);
    };
  }, [dispatch]);

  return <Layout />;
}

export default App;
