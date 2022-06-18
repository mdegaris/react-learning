import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { fetchRounds } from './state/data/cache-actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshData = () => {
      console.log('refresh data...');
      dispatch(fetchRounds());
    };

    refreshData();

    // const intermittentRefresh = setInterval(refreshData, 10000);

    // return () => {
    //   clearInterval(intermittentRefresh);
    // };
  }, [dispatch]);

  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default App;
