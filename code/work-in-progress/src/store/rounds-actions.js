import { allRoundsActions } from './all-rounds-slice';

export const fetchRoundsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://work-in-progress-127df-default-rtdb.europe-west1.firebasedatabase.app/rounds.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch study round data.');
      }

      const data = await response.json();
      console.log('data', data);
      return data;
    };

    try {
      const roundsData = await fetchData();
      dispatch(allRoundsActions.replaceRoundsList({ rounds: roundsData }));
    } catch (error) {
      console.log(error);
    }
  };
};
