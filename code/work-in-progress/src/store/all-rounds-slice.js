import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  rounds: [],
  active: 0,
  completed: 0,
  undelivered: 0,
  delivered: 0,
};

const allRoundsSlice = createSlice({
  name: 'studyRounds',
  initialState: defaultState,
  reducers: {
    replaceRoundsList(state, action) {
      const updatedRounds = action.payload.rounds;
      state.rounds = updatedRounds;
      state.active = !updatedRounds
        ? 0
        : updatedRounds.reduce((r1, r2) => (r1 + !r2.isCompete ? 1 : 0));
      state.completed = !updatedRounds
        ? 0
        : updatedRounds.reduce((r1, r2) => (r1 + r2.isCompete ? 1 : 0));
    },
  },
});

export const allRoundsActions = allRoundsSlice.actions;

export default allRoundsSlice;
