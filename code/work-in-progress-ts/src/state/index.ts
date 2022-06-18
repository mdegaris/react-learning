import { configureStore } from '@reduxjs/toolkit';

import wipRoundsSlice from './slices/cache-slice';
// import deadlinesSlice from './deadlines-slice';

const store = configureStore({
  reducer: {
    wipRounds: wipRoundsSlice.reducer,
    // deadlines: deadlinesSlice.reducer,
  },
});

export default store;
