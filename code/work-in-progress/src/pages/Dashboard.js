import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dashboardActions } from '../store/dashboard-slice';
import Deadlines from '../components/cards/Deadlines';

const Dashboard = () => {
  const dispatch = useDispatch();
  const rounds = useSelector((state) => state.allRounds.rounds);

  useEffect(() => {
    dispatch(dashboardActions.replaceDeadlines({ rounds: rounds }));
  }, [rounds, dispatch]);

  return (
    <div>
      <Deadlines />
    </div>
  );
};

export default Dashboard;
