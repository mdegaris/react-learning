import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { DispatchType, RoundList, RoundJSON } from '../../types';
import { wipRoundsActions } from '../slices/cache-slice';
const ROUNDS_DATABASE =
  'https://work-in-progress-127df-default-rtdb.europe-west1.firebasedatabase.app/rounds.json';

export const fetchRounds = () => {
  return async (dispatch: DispatchType) => {
    const fetchData = async (): Promise<RoundJSON[]> => {
      const response = await fetch(ROUNDS_DATABASE);

      if (!response.ok) {
        throw new Error('Could not fetch study round data.');
      }

      return await response.json();
    };

    try {
      const roundsData = await fetchData();
      dispatch(wipRoundsActions.replaceRoundsList({ rounds: roundsData }));
    } catch (error) {
      console.log(error);
    }
  };
};
