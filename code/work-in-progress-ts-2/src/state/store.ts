import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import studyOptionsSlice from './slices/studyOptionsSlice';

export const store = configureStore({
  reducer: {
    allStudyOptions: studyOptionsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
