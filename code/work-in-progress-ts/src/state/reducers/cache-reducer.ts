import objHash from 'object-hash';
import { Round, RoundList, CacheAction, CacheState } from '../../types';
import ActionType from '../action-types';

const emptyRounds: RoundList = {
  dateRange: null,
  rounds: [],
};
const initialState = {
  cachedRounds: emptyRounds,
  // active: 0,
  // completed: 0,
  // undelivered: 0,
  // delivered: 0,
};

const buildRoundList = (jsonRounds: any): Round[] => {
  const rounds: Round[] = [];
  jsonRounds.forEach((d: any) => {
    const thisRound: Round = {
      contractId: d.contractId,
      studyId: d.studyId,
      roundId: d.round,
      expectedRecepitDate: d.expectedRecepitDate,
      isComplete: d.isComplete,
    };
    rounds.push(thisRound);
  });

  return rounds;
};

export const cacheReducer = (state: CacheState, action: CacheAction) => {
  switch (action.type) {
    case ActionType.UPDATE_CACHE:
      const updatedRounds = buildRoundList(action.payload);
      if (objHash(updatedRounds) === objHash(state.cachedRounds.rounds)) {
        console.log('No data changes.');
        return;
      }

      state.cachedRounds.rounds = updatedRounds;
      // state.active = updatedRounds.reduce(
      //   (acc: number, current: Round) => acc + (!current.isComplete ? 1 : 0),
      //   0
      // );
      // state.completed = updatedRounds.reduce(
      //   (acc: number, current: Round) => acc + (current.isComplete ? 1 : 0),
      //   0
      // );
      break;
    case ActionType.CLEAR_CACHE:
      state = initialState;
  }
};
