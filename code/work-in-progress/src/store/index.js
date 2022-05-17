import { configureStore } from '@reduxjs/toolkit';

import allRoundsSlice from './all-rounds-slice';
import dashboardSlice from './dashboard-slice';

const store = configureStore({
  reducer: {
    allRounds: allRoundsSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
