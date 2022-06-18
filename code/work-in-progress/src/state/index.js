import { configureStore } from '@reduxjs/toolkit';

import allRoundsSlice from './all-rounds-slice';
import deadlinesSlice from './deadlines-slice';

const store = configureStore({
  reducer: {
    allRounds: allRoundsSlice.reducer,
    deadlines: deadlinesSlice.reducer,
  },
});

export default store;
