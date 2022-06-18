import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deadlinesActions } from '../store/deadlines-slice';
import Deadlines from '../components/cards/Deadlines';

const Dashboard = () => {
  const dispatch = useDispatch();
  const rounds = useSelector((state) => state.allRounds.rounds);

  useEffect(() => {
    dispatch(deadlinesActions.updateDeadlines(rounds));
  }, [rounds, dispatch]);

  return (
    <div>
      <Deadlines />
    </div>
  );
};

export default Dashboard;
