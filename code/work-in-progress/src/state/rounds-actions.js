import { allRoundsActions } from './all-rounds-slice';
import { ROUNDS_DATABASE } from '../config/firebase';

export const fetchRoundsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(ROUNDS_DATABASE);

      if (!response.ok) {
        throw new Error('Could not fetch study round data.');
      }

      return await response.json();
    };

    try {
      const roundsData = await fetchData();
      dispatch(allRoundsActions.replaceRoundsList({ rounds: roundsData }));
    } catch (error) {
      console.log(error);
    }
  };
};
